import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faq";
import { FaqItem } from "@/types";

const FaqSection = () => {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:px-8">
      <Accordion type="single" collapsible>
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
