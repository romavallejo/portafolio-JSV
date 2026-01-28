import EventsGrid from "@/components/EventsGrid";
import Carousel from "@/components/Carousel";
import { DualTypewriter } from "@/components/DualTypewriter";
import { Typewriter } from "@/components/Typewriter";

export default function events() {
    return (
        <>
            <div className="flex justify-evenly items-center flex-row-reverse gap-8 p-14 bg-background-alt min-h-[calc(100vh-86px)]">

                <div className="flex justify-center flex-1">
                    <Carousel images={[11,12,13]} changable={false}/>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <DualTypewriter 
                        top="Coordinación estratégica" 
                        bottom="de eventos de marca"
                        colorTop={true}
                        color="text-red"
                        className="text-right uppercase font-bold text-4xl lg:text-6xl" 
                    />
                    <Typewriter 
                        className="text-right text-lg"
                        speed={0.003}
                        text="Como parte del equipo de Brand Events en Ferragamo 
                        México, he liderado la planeación, ejecución y supervisión de
                        eventos de marca, asegurando una alineación estratégica
                        con los valores de la maison. Mi rol abarca desde la gestión de
                        proveedores y presupuestos, coordinación de diferentes
                        áreas, hasta la curaduría de experiencias premium,
                        involucrando activaciones, lanzamientos de colección y
                        colaboraciones con medios y celebridades."
                    />
                </div>
            </div>

            <EventsGrid/>
        </>
    );
}