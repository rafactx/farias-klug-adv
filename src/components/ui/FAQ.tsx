'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Card, CardContent, Heading, Paragraph } from './index';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

interface FAQProps {
  categories: FAQCategory[];
  className?: string;
}

export function FAQ({ categories, className }: FAQProps) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className={cn("space-y-8", className)}>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <Heading level={3} className="mb-6 text-[var(--color-primary-500)]">
            {category.category}
          </Heading>

          <div className="space-y-4">
            {category.questions.map((item, questionIndex) => {
              const key = `${categoryIndex}-${questionIndex}`;
              const isOpen = openItems[key];

              return (
                <Card
                  key={questionIndex}
                  variant="paper"
                  className="transform transition-all duration-200 hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(categoryIndex, questionIndex)}
                      className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-2 rounded-lg"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${key}`}
                    >
                      <div className="flex items-center justify-between">
                        <Heading
                          level={4}
                          className="text-base font-austera-medium text-[var(--color-foreground)] pr-4 leading-relaxed"
                        >
                          {item.question}
                        </Heading>
                        <div className="flex-shrink-0">
                          <svg
                            className={cn(
                              "h-5 w-5 text-[var(--color-primary-500)] transition-transform duration-200",
                              isOpen ? "rotate-180" : ""
                            )}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    <div
                      id={`faq-answer-${key}`}
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="px-6 pb-6">
                        <Paragraph className="text-[var(--color-muted-foreground)] leading-relaxed">
                          {item.answer}
                        </Paragraph>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
