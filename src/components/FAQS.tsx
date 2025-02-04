import { faqs } from "@/data/faqs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQS() {
    return (
        <section className="bg-background-white py-11 px-4 flex flex-col items-center">
            <h1 className="text-5xl font-bold text-gray-800 text-center">
                Preguntas frecuentes
            </h1>

            <Accordion type="single" collapsible className="border rounded-lg solid p-10 md:w-1/3 mt-6">
                {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
