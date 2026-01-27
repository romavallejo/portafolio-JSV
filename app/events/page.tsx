import EventsGrid from "@/components/EventsGrid";
import { Typewriter } from '@/components/Typewriter';

export default function events() {
    return (
        <>
            <div className="flex justify-evenly items-center flex-row-reverse gap-8 p-14 bg-background-alt min-h-[calc(100vh-86px)]">

                <div className="flex-1">
                    imagen
                </div>

                <div className="flex-1">
                    <Typewriter text={'Coordinación estratégica'}/>
                    <Typewriter text={'de eventos de marca'}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium amet quia ipsam eaque cupiditate dolore eveniet laboriosam, laudantium ab sed doloribus porro deleniti provident natus maiores quas, quo blanditiis neque consequatur possimus fugit! Eius doloribus nihil voluptatem neque ratione at praesentium quod alias sapiente nam. Quaerat corporis facere reprehenderit harum.</p>
                </div>
            </div>

            <EventsGrid/>
        </>
    );
}