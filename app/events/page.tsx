import EventsGrid from "@/components/EventsGrid";
import Carousel from "@/components/Carousel";
import { DualTypewriter } from "@/components/DualTypewriter";
import { Typewriter } from "@/components/Typewriter";

export default function events() {

    const displayImages = ['/images/11/11_0.jpg','/images/12/12_0.jpg','/images/13/13_0.jpg'];

    return (
        <>
            <div className="flex justify-evenly items-center flex-col lg:flex-row-reverse gap-8 p-6 sm:p-16 bg-background-alt min-h-[calc(100vh-86px)]">

                <div className="flex justify-center w-full lg:flex-1">
                    <Carousel images={displayImages} changable={false}/>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <DualTypewriter 
                        top="Coordinación estratégica" 
                        bottom="de eventos de marca"
                        colorTop={true}
                        color="text-red"
                        className="text-center lg:text-right uppercase font-bold text-2xl sm:text-4xl md:text-5xl xl:text-6xl" 
                    />
                    <Typewriter 
                        className="text-justify lg:text-right text-lg"
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