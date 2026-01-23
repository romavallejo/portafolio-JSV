import Link from 'next/link'
import Image from 'next/image';
import EventsGrid from "@/components/EventsGrid"
import TextHighlight from '@/components/TextHighlight';
import Carousel from '@/components/Carousel';

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 p-14 bg-background-alt min-h-[calc(100vh-86px)]">
        
        <div className="bg-red-light p-4">
          {/*<Image
            src={'/images/2/2_0.jpg'} //LINK OF MAIN IMAGE GOES HERE :D
            width={700}
            height={700}
            alt="Imagen de evento"
          />*/}
          <Carousel images={[0,1,2]}/>
        </div>

        <div className="text-center md:text-right">
          <h1 className="text-4xl lg:text-6xl font-bold uppercase">Construyendo <br/> grandes proyectos</h1>
          <h3 className="text-2xl lg:text-4xl italic">Jimena Santillana Vallejo</h3>
        </div>

      </div>

      <EventsGrid highlightPage={true}/>
      <div className="flex justify-center pb-12">
        <Link href={"/events"}><TextHighlight>Más Eventos...</TextHighlight></Link>
      </div>

    </>
  );
}
