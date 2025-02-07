export interface Location {
    name: string;
    address: string;
    phone: string;
    schedule: string[];
    mapPosition: "right" | "left";
    mapUrl: string;
}

export const locations: Location[] = [
    {
        name: "Viajes Carrefour Getxo",
        address: "Ibaigane Kalea, 25, 48930 Getxo, Bizkaia",
        phone: "+34 944035577",
        schedule: [
            "Lunes a Viernes: 10:00 - 14:00, 16:30 - 20:00",
            "Sábados: 10:00 - 14:00",
            "Domingos: Cerrado",
        ],
        mapPosition: "right",
        mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.4680541661523!2d-3.0109294231919788!3d43.32539387111946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a2d9181c2c9%3A0x6e59fe9ecef6b054!2sViajes%20Carrefour!5e0!3m2!1ses!2ses!4v1738924047094!5m2!1ses!2ses",
    },
    {
        name: "Viajes Carrefour Barakalo",
        address: "Arrandi Kalea, 36, 48901 Barakaldo, Bizkaia",
        phone: "+34 944035577",
        schedule: [
            "Lunes a Viernes: 10:00 - 14:00, 16:30 - 20:00",
            "Sábados: 11:00 - 14:00",
            "Domingos: Cerrado",
        ],
        mapPosition: "left",
        mapUrl:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.9338006913554!2d-2.9865798000000354!3d43.29470800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5ba4cfb065c9%3A0xe8802c6a73a5e1ba!2sViajes%20Carrefour%20Barakaldo!5e0!3m2!1ses!2ses!4v1738923820897!5m2!1ses!2ses",
    },
];