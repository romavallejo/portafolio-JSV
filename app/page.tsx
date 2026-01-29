import Link from 'next/link'
import EventsGrid from "@/components/EventsGrid"
import TextHighlight from '@/components/TextHighlight';
import Carousel from '@/components/Carousel';
import { Typewriter } from '@/components/Typewriter';
import { DualTypewriter } from '@/components/DualTypewriter';

export default function LandingPage() {

  const displayImages = ['/images/2/2_0.jpg','/images/1/1_0.jpg','/images/3/3_0.jpg'];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-evenly items-center p-14 bg-background-alt min-h-[calc(100vh-86px)]">
        
        <div className=" flex bg-red-light p-6 flex-1 max-w-[900px]">
          <Carousel images={displayImages} changable={false}/>
        </div>

        <div className="text-center md:text-right">
          <DualTypewriter 
            top='Contruyendo'
            bottom='grandes proyectos'
            className="text-4xl lg:text-6xl font-bold uppercase"
            colorTop={false}
            color='text-red'
          />
          <Typewriter 
            className='text-2xl lg:text-4xl italic'
            text='Jimena Santillana Vallejo'/>
        </div>

      </div>

      <EventsGrid highlightPage={true}/>
      
      <div className="flex justify-center pb-12">
        <Link href={"/events"}><TextHighlight>Más Eventos...</TextHighlight></Link>
      </div>

    </>
  );
}
