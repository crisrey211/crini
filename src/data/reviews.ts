export interface Review  {
  name: string;
  username: string;
  body: string;
  img: string;
};

export const reviews:Review[] = [
    {
        name: "Alexandra Obregon",
        username: "@Alexandra",
        body: "Viaje a Riviera Maya, sin palabras. Un viaje muy lindo, la pasé divino, el hotel que me eligieron espectacular. Los vuelos super tranquilo sin complicaciones. Ni que decir de que las chicas son majisimas, un trato excelente.",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Dalila Lopez",
        username: "@Dalila",
        body: "Muy amables, tuvimos dudas y en todo momento trataron de solventar y calmarnos. La recomendamos y volveremos a viajar con Carrefour viajes de Barakaldo.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Ángela González",
        username: "@Ángela",
        body: "Las niñas se lo pasaron pipa no hubo ningún problema todo perfecto.",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Javi Bilbao",
        username: "@Javi",
        body: "Servicio exquisito y atencion maxima. Precios inmejorables. Profesionales experimentadas y muy atentas.",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Maria de los Angeles",
        username: "@Maria",
        body: "Excelente servicio, amabilidad, empatía, calor humano. Gracias Greisy por tu apoyo. Mi viaje a Nicaragua fue un éxito y pude estar con mi mamá. Dios te bendiga.",
        img: "https://avatar.vercel.sh/jenny",
    },
    {
        name: "Txaro Blanco",
        username: "@Txaro",
        body: "Franquicia viajes carrefour. Buenos precios y soluciones en tienda física.",
        img: "https://avatar.vercel.sh/james",
    },
];
