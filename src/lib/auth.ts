import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import User from "@/models/User";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const providers: any[] = [
  CredentialsProvider({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
      rememberMe: { label: "Remember Me", type: "text" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) {
        throw new Error("Email and password are required");
      }

      await dbConnect();

      const user = await User.findOne({
        email: credentials.email.toLowerCase(),
      });

      if (!user || !user.passwordHash) {
        throw new Error("Invalid email or password");
      }

      const isValid = await bcrypt.compare(
        credentials.password,
        user.passwordHash
      );

      if (!isValid) {
        throw new Error("Invalid email or password");
      }

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.profileImage,
        plan: user.plan,
        rememberMe: credentials.rememberMe === "true",
      };
    },
  }),
];

// Only add Google provider when credentials are configured
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  providers.push(
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  );
}

export const authOptions: NextAuthOptions = {
  providers,

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await dbConnect();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = await User.create({
            name: user.name,
            email: user.email,
            googleId: account.providerAccountId,
            profileImage: user.image,
            passwordHash: null,
          });
          user.id = newUser._id.toString();
          (user as { plan?: string }).plan = newUser.plan;
        } else {
          if (!existingUser.googleId) {
            existingUser.googleId = account.providerAccountId;
            await existingUser.save();
          }
          user.id = existingUser._id.toString();
          (user as { plan?: string }).plan = existingUser.plan;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
        token.plan = (user as { plan?: string }).plan ?? "free";
        token.rememberMe = (user as { rememberMe?: boolean }).rememberMe ?? true;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.plan = token.plan as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.image = token.picture as string | null | undefined;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days default
  },

  pages: {
    signIn: "/auth/signin",
  },

  secret: process.env.NEXTAUTH_SECRET,
};
