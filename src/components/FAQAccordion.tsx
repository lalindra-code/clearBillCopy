"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3" role="list" aria-label="Frequently asked questions">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-[#22C278]/40 bg-green-50/50 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
            role="listitem"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span
                className={`text-[0.9375rem] font-semibold leading-snug transition-colors ${
                  isOpen ? "text-[#065F46]" : "text-gray-800"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-[#22C278] text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
                aria-hidden
              >
                {isOpen ? (
                  <Minus className="w-3.5 h-3.5" />
                ) : (
                  <Plus className="w-3.5 h-3.5" />
                )}
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-64" : "max-h-0"
              }`}
            >
              <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
