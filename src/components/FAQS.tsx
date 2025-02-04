import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQS() {
    return (
        <section className="bg-background-white  py-11 px-4 items-center flex flex-col">
            <h1 className="text-5xl font-bold text-gray-800 font-inter text-center">
                Preguntas frecuentes
            </h1>
            <Accordion type="single" collapsible className="border rounded-lg solid p-10 md:w-1/3 mt-6">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It&apos;s animated by default, but you can disable it if you
                        prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}