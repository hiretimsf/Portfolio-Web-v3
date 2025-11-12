import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faq";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/types";

type FaqSectionProps = {
  className?: string;
};

const FaqSection = ({ className = "bg-panda-prune" }: FaqSectionProps) => {
  return (
    <section
      className={cn(
        "mx-auto w-full justify-center px-6 py-8 md:py-10 lg:px-8",
        "border-panda-text/10 border-b",
        className,
      )}
    >
      <Accordion type="single" collapsible className="mx-auto max-w-xl">
        {faqItems.map((item: FaqItem, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-panda-text text-lg/6 font-semibold hover:no-underline sm:text-xl/8">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-panda-text text-base/7 sm:text-lg/8">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export { FaqSection };
