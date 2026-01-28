import { notFound } from "next/navigation";
import { eventsData } from "@/data/eventData";
import { colorMap } from "@/data/colorMap";
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
        <div className={"flex justify-evenly items-center gap-8 p-14 min-h-[calc(100vh-86px)] " + (event.id % 2 != 0 ? "flex-row-reverse" : "")}>
            <div 
                className={"flex justify-center flex-1 p-6 "+ colorMap[event.color].bg}
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
                    className={"uppercase font-bold text-4xl lg:text-6xl " + (event.id % 2 != 0 ? "text-right" : "")}
                />
                <Typewriter 
                    className={"text-lg " + (event.id % 2 != 0 ? "text-right" : "text-left")}
                    text={event.text}
                    speed={0.003}
                />
            </div>
        </div>
    );
}