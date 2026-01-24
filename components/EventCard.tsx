import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client"

interface EventCardProps {
    id: number;
    name: string;
    image: string;
}

const EventCard = ({ id, name, image }: EventCardProps) => {
    return (
        <Link href={`/events/${id}`} className="h-full block">
            <motion.div
                className="h-full p-7 border border-merge rounded-xl"
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.4}}
                whileHover={{scale: 1.05}}
            >
                <div className="relative w-full h-[250px] overflow-hidden rounded">
                    <Image 
                        src={image}
                        fill 
                        style={{objectFit: "cover"}}
                        alt={`Imagen de ${name}`}
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="rounded-lg"
                    />
                </div>
                <p className="text-lg uppercase font-medium text-center">{name}</p>
            </motion.div>
        </Link>
    );
};
export default EventCard;