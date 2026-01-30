import type { ColorName } from "@/utils/colorMap";

interface eventsDataInterface {
    id: number;
    titleTop: string;
    titleBottom: string;
    coloredTop: boolean;
    color: ColorName;
    text: string;
    imgNum: number;
}

export const eventsData: eventsDataInterface[] = [
    {
        id: 0,
        titleTop: "Pop Up Store",
        titleBottom: "Perisur",
        coloredTop: true,
        color: "blue",
        text: "El pop up de la colección SS24 se presentó en Palacio de Hierro Perisur. La estrategia incluyó presencia en pantallas, newsletter de Ferragamo y acciones de alcance directo.",
        imgNum: 7,
    },
    {
        id: 1,
        titleTop: "FW24",
        titleBottom: "Press Day",
        coloredTop: true,
        color: "brown",
        text: "La colección FW24 se presentó en la Ciudad de México con el objetivo de exhibir las más recientes creaciones de la marca y marcar la pauta para la temporada. \nEste evento logró cautivar a la audiencia con una muestra exquisita de prendas ready-to-wear y accesorios, en un entorno distinto al de la tienda: un exclusivo rooftop en Polanco. El espacio fue cuidadosamente seleccionado para ofrecer una experiencia única y sofisticada, reforzando la exclusividad de la marca y generando un ambiente aspiracional que fortaleció la conexión con los invitados.",
        imgNum: 7,
    },
    {
        id: 2,
        titleTop: "Lanzamiento",
        titleBottom: "Signorina",
        coloredTop: false,
        color: "red",
        text: "Dentro de la presentación de la colección FW24 en Ciudad de México, por la noche se llevó a cabo una cena privada en el rooftop de Polanco con celebridades y representantes de prensa para dar a conocer de forma exclusiva las fragancias Signorina y Red Leather. \nEsta experiencia íntima brindó la oportunidad de fortalecer la relación con key partners y medios clave, creando un ambiente de cercanía y sofisticación que complementó la narrativa del evento principal y amplificó la visibilidad de la marca ante audiencias estratégicas.",
        imgNum: 7,
    },
    {
        id: 3,
        titleTop: "Cinema",
        titleBottom: "Ballerina",
        coloredTop: false,
        color: "red-light",
        text: "En El Palacio de Hierro Polanco se llevó a cabo una activación especial para impulsar la categoría de calzado femenino y posicionar a Ferragamo como referente de lujo y diseño. Esta experiencia dinámica permitió destacar la artesanía y el valor de nuestra icónica Ballerina, creando un vínculo emocional con los asistentes. \n Durante la jornada se organizaron charlas con personalidades de medios de comunicación para generar conversación y exposición, y se proyectó un video que puso en primer plano la historia, los procesos y la calidad del calzado, ofreciendo un recorrido visual atractivo que reforzó el mensaje de la marca.",
        imgNum: 7,
    },
    {
        id: 4,
        titleTop: "Out Of Store",
        titleBottom: "Monterrey",
        coloredTop: true,
        color: "green",
        text: "El evento se realizó en un venue de alto nivel, entre JW Marriott o Live Aqua (según disponibilidad), con el objetivo de reforzar la delidad de clientes actuales, reactivar relaciones con consumidores inactivos y convertir prospectos estratégicos",
        imgNum: 7,
    },
    {
        id: 5,
        titleTop: "Takeover",
        titleBottom: "St. Regis Punta Mita",
        coloredTop: false,
        color: "blue",
        text: "Para cerrar 2024 e iniciar 2025, se creó el Ferragamo Takeover & Pop Up, convirtiéndolo en el hot spot de la temporada en las cálidas playas de la Riviera Nayarita. La activación tuvo lugar en el icónico St. Regis Punta Mita, que celebró su 15° aniversario con un diseño renovado y vanguardista. \nSe llevó acabo la intervención de distintos espacios del hotel, como la playa, el café Sea Breeze, la alberca y un área interior para colocar una Pop Up, ofreciendo una experiencia inmersiva. Además, se llevó a cabo una experiencia VIC dirigida a clientes especiales, inuencers, prensa y prospectos clave, reforzando la conexión con la marca mediante detalles cuidadosamente diseñados y momentos memorables.",
        imgNum: 7,
    },
    {
        id: 6,
        titleTop: "Pop Up",
        titleBottom: "St. Regis Punta Mita",
        coloredTop: false,
        color: "blue",
        text: "El Ferragamo Pop Up Winter Club funcionó además como un punto de venta exclusivo dentro del St. Regis Punta Mita, permitiendo a clientes, invitados especiales y huéspedes del hotel descubrir y adquirir productos de la marca en un ambiente relajado y sofisticado.",
        imgNum: 5,
    },
    {
        id: 7,
        titleTop: "Christmas",
        titleBottom: "Concert",
        coloredTop: false,
        color: "red",
        text: "El Christmas Concert fue una experiencia mágica de Navidad diseñada especialmente para clientes VIC, medios, celebridades e influencers. En colaboración con Candlelight, el evento se levó a cabo en el majestuoso Teatro Poliforum Siqueiros, donde todo el espacio fue cuidadosamente tematizado con la cálida iluminación de cientos de velas, creando un ambiente íntimo y acogedor. \nLos asistentes disfrutaron de una exquisita cena y coctelería especialmente seleccionada para complementar la velada. El punto culminante de la noche fue la presentación de El Cascanueces a cargo de Candlelight, que ofreció una interpretación inolvidable con música en vivo y balet",
        imgNum: 7,
    },
    {
        id: 8,
        titleTop: "SS25",
        titleBottom: "Press Day",
        coloredTop: true,
        color: "grey",
        text: "La colección SS25 se reveló en la Ciudad de México con una propuesta innovadora que mostró la evolución creativa de la marca para la próxima temporada.\nEl encuentro reunió a invitados clave en Distrito Polanco, un espacio que potenció la esencia contemporánea de la colección.\nEn esta edición, se ofreció un recorrido fuera del contexto habitual de la tienda, invitando a los asistentes a descubrir nuevas siluetas, materiales y accesorios en un ambiente cuidadosamente ambientado. Esta experiencia permitió fortalecer la relación con clientes y amigos de la marca, reafirmando su compromiso con propuestas frescas, relevantes y llenas de inspiración.",
        imgNum: 7,
    },
    {
        id: 9,
        titleTop: "Press Day",
        titleBottom: "Dinner Experience",
        coloredTop: false,
        color: "grey",
        text: "Como parte del Press Day SS25, se ofreció una exclusiva comida para celebridades y clientes VIC, diseñada para complementar la presentación de la colección y reforzar la conexión con invitados clave. La experiencia culinaria estuvo a cargo del Chef Julián Martínez, quien preparó un menú de autor inspirado en la frescura y sofisticación de la temporada.\nEl encuentro se llevó a cabo en colaboración con Sepia, fusionando moda y gastronomía en un ambiente íntimo, cuidado hasta el último detalle.",
        imgNum: 6,
    },
    {
        id: 10,
        titleTop: "Takeover",
        titleBottom: "Palacio de Hierro",
        coloredTop: false,
        color: "yellow",
        text: "Se realizó un takeover especial en diversas tiendas de El Palacio de Hierro, llevando la presencia de la marca a un nivel más cercano e interactivo con los clientes. \nEsta activación consistió en la instalación de pequeñas pop ups y la intervención de pantallas en puntos clave, generando un recorrido inmersivo y dinámico dentro de cada tienda. \nLos puntos intervenidos fueron PDH Polanco, Perisur, Coyoacán, Puebla, Santa Fe, Querétaro y Monterrey.",
        imgNum: 7,
    },
    {
        id: 11,
        titleTop: "Tramezza",
        titleBottom: "Experience",
        coloredTop: true,
        color: "orange",
        text: "Para la temporada del Día del Padre se creó un espacio exclusivo: el Tramezza Red Room, un montaje dedicado a destacar la herencia artesanal de la marca mediante una exhibición de herramientas y procesos de confección. \nComo parte de esta experiencia, los clientes pudieron personalizar hormas de zapatos con sus iniciales, gracias a un grabador profesional, ofreciendo así un detalle único y significativo para regalar en esta fecha tan especial. \nLa experiencia principal se realizó en PDH Polanco, BTQ Monterrey y BTQ Iguatemi, mientras que una versión adaptada se implementó en PDH Perisur, PDH Puebla, PDH Querétaro, PDH Santa Fe y BTQ Artz.",
        imgNum: 7,
    },
    {
        id: 12,
        titleTop: "Tramezza",
        titleBottom: "Dinner Experience",
        coloredTop: false,
        color: "orange",
        text: "Como parte de la narrativa artesanal de Tramezza, se organizó una cena íntima para celebrar la maestría, la tradición y la elegancia contemporánea. Esta velada exclusiva reunió a clientes VIC, directores de las principales revistas masculinas y celebridades e invitados clave que representan los valores de herencia, sosticación y masculinidad moderna. \nLa cena se levó a cabo en el restaurante Prendes de Palacio de Hierro Polanco, en un ambiente cuidadosamente inspirado en la estética del Tramezza Red Room.",
        imgNum: 7,
    },
    {
        id: 13,
        titleTop: "Ferragamo",
        titleBottom: "Caffè",
        coloredTop: false,
        color: "red",
        text: "JIME PASAME EL TEXTO PORFAVOR",
        imgNum: 6,
    },
]