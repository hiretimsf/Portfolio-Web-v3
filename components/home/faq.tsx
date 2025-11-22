import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faq";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/types";

type FaqSectionProps = {
  className?: string;
};

const FaqSection = ({ className = "" }: FaqSectionProps) => {
  return (
    <section
      className={cn(
        "mx-auto w-full justify-center px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      <Accordion
        type="single"
        collapsible
        className="mx-auto max-w-xl divide-y divide-dashed divide-gray-200 border-x border-dashed border-gray-200"
      >
        {faqItems.map((item: FaqItem, index: number) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: faq items are static
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-panda-text px-4 text-lg/6 font-semibold hover:no-underline sm:px-6 sm:text-xl/8 lg:px-8">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-panda-text px-4 text-base/7 sm:px-6 sm:text-lg/8 lg:px-8">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export { FaqSection };
