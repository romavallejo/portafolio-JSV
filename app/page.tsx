import EventsGrid from "@/components/EventsGrid";
import Link from 'next/link'


export default function LandingPage() {
  return (
    <>

      <div className="flex justify-evenly items-center p-16 bg-background-alt">
        <div className="bg-red-light p-4 w-1/3">
          Image Holder
        </div>
        <div className="text-right w-1/2">
          <h1 className="text-6xl font-bold uppercase">Construyendo <br/> grandes proyectos</h1>
          <h3 className="text-4xl italic">Jimena Santillana Vallejo</h3>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-12">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <EventsGrid>

        </EventsGrid>
        <div className="flex justify-center">
          <p className='text-background bg-red-light p-2 rounded-xl'><Link href={"/events"}>Más Eventos...</Link></p>
        </div>
      </div>
    </>
  );
}
