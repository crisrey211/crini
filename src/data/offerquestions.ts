interface Question {
  question: string;
  answer: string;
}

export const offerquestions: Question[] = [
    {
        question: "¿Cuál es la política de cancelación?",
        answer:
            "Nuestra política de cancelación varía según el tipo de oferta. En general, se ofrece un reembolso completo si se cancela con al menos 7 días de antelación.",
    },
    {
        question: "¿Están incluidas las comidas?",
        answer:
            "Depende de la oferta específica. Algunas incluyen todas las comidas, otras solo el desayuno, y algunas no incluyen comidas. Revisa los detalles de la oferta para más información.",
    },
    {
        question: "¿Cómo puedo contactar con el servicio al cliente?",
        answer:
            "Puede contactarnos por teléfono al +34 900 123 456 o por correo electrónico a info@tuviaje.com. Nuestro equipo está disponible de lunes a viernes de 9:00 a 18:00.",
    },
    {
        question: "¿Ofrecen opciones de pago a plazos?",
        answer:
            "Sí, ofrecemos opciones de pago a plazos para la mayoría de nuestras ofertas. Puede elegir pagar en 3, 6 o 12 meses sin intereses, dependiendo del monto total de su compra.",
    },
]