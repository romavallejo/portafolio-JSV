import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client"

interface EventCardProps {
    id: number;
    name: string;
}

const EventCard = ({ id, name }: EventCardProps) => {
    return (
        <Link href={`/events/${id}`} className="h-full block">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1}}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-full p-7 border border-merge rounded-xl"
            >
                <div className="relative w-full h-62.5 overflow-hidden rounded">
                    <Image 
                        src={`/images/${id}/${id}_0.jpg`}
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