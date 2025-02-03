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
        address: "Bajo, Ibaigane Kalea, 25, 48930 Getxo, Biscay",
        phone: "+34 944035577",
        schedule: [
            "Lunes a Viernes: 10:00 - 14:00, 16:30 - 20:00",
            "Sábados: 10:00 - 14:00",
            "Domingos: Cerrado",
        ],
        mapPosition: "right",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.9208798678336!2d-3.0109229846882235!3d43.34956057913327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5065bace4f3f%3A0x1d53fae41a3a4b28!2sCarrefour%20Getxo!5e0!3m2!1sen!2ses!4v1615382022498!5m2!1sen!2ses",
    },
    {
            name: "Viajes Carrefour Madrid",
            address: "Calle Gran Vía, 30, 28013 Madrid, España",
            phone: "+34 915123456",
            schedule: [
                "Lunes a Viernes: 09:00 - 13:30, 16:00 - 19:30",
                "Sábados: 10:00 - 13:00",
                "Domingos: Cerrado",
            ],
            mapPosition: "left",
            mapUrl:
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.9208798678336!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5065bace4f3f%3A0x1d53fae41a3a4b28!2sCarrefour%20Madrid!5e0!3m2!1sen!2ses!4v1615382022498!5m2!1sen!2ses",
        },
];
