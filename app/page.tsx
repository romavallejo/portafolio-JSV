import Link from 'next/link'
import EventsGrid from "@/components/EventsGrid"
import TextHighlight from '@/components/TextHighlight';
import Carousel from '@/components/Carousel';
import { Typewriter } from '@/components/Typewriter';
import { DualTypewriter } from '@/components/DualTypewriter';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function LandingPage() {

  const displayImages = ['/images/2/2_0.jpg','/images/1/1_0.jpg','/images/3/3_0.jpg'];

  return (
    <>

      

      <div className="relative overflow flex gap-4 flex-col lg:flex-row justify-evenly items-center p-8 min-h-[calc(100vh-86px)]">
        <AnimatedBackground 
          start={false}
          className='hidden lg:block absolute inset-0 z-0 pointer-events-none'
        />
        <AnimatedBackground 
          horizontal={false}
          start={false}
          className='lg:hidden absolute inset-0 z-0 pointer-events-none'
        />
        <div className="bg-red-light p-4 sm:p-6 w-full lg:flex-1 max-w-225 ">
          <Carousel images={displayImages} changable={false}/>
        </div>

        <div className="text-center lg:text-right">
          <DualTypewriter 
            top='Contruyendo'
            bottom='grandes proyectos'
            className="text-4xl md:text-5xl xl:text-6xl font-bold uppercase"
            colorTop={false}
            color='text-red'
          />
          <Typewriter 
            className='text-2xl md:text-3xl xl:text-4xl italic'
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
