import { notFound } from "next/navigation";
import { eventsData } from "@/data/eventData";
import { colorMap } from "@/utils/colorMap";
import Carousel from "@/components/Carousel";
import { DualTypewriter } from "@/components/DualTypewriter";
import { Typewriter } from "@/components/Typewriter";

export default async function eventInfo({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;

    const index = Number(id);

    if (Number.isNaN(index))
        notFound();
    if (Number(index) < 0 || eventsData.length <= Number(index) )
        notFound();

    const event = eventsData[Number(index)];

    let images: string[] = [];
    for (let i = 0; i < event.imgNum; i++) 
        images.push(`/images/${event.id}/${event.id}_${i}.jpg`);

    return(
        <div className={"flex justify-evenly items-center flex-col gap-8 p-14 min-h-[calc(100vh-86px)] " + (event.id % 2 != 0 ? "lg:flex-row-reverse" : "lg:flex-row")}>
            <div 
                className={"flex justify-center w-full lg:flex-1 p-6 "+ colorMap[event.color].bg}
            >
                <Carousel 
                    images={images} 
                    changable={true}
                />
            </div>

            <div className="flex flex-col gap-2 flex-1">
                <DualTypewriter 
                    top={event.titleTop} 
                    bottom={event.titleBottom}
                    colorTop={event.coloredTop}
                    color={colorMap[event.color].text ?? ""}
                    className={"uppercase font-bold text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-center " + (event.id % 2 != 0 ? "md:text-right" : "md:text-left")}
                />
                <Typewriter 
                    className={"text-lg text-justify " + (event.id % 2 != 0 ? "lg:text-right" : "lg:text-left")}
                    text={event.text}
                    speed={0.003}
                />
            </div>
        </div>
    );
}