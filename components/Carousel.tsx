'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import TextHighlight from '@/components/TextHighlight';
import { eventSummaries } from '../data/eventsSummary'
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
    images: number[],
}

const Carousel = ({ images }: CarouselProps) => {

    if (!images || images.length === 0)
        return <div>No images available</div>;
    
    const [imageIndex,setImageIndex] = useState(0);
    const[isActive,setIsActive] = useState(true);
    const total = images.length;

    useEffect(()=>{
        if (!isActive) return;
        const intervalId = setInterval(() => {
            setImageIndex(i => (i+1) % total);
        },8000);
        return () => clearInterval(intervalId);
    },[isActive, imageIndex]);

    return (
        <>
            <div className="flex flex-col">
                <Image
                    className="hover:cursor-pointer"
                    src={eventSummaries[images[imageIndex]].image}
                    width={900}
                    height={900}
                    alt={eventSummaries[images[imageIndex]].name}
                    onClick={()=>setIsActive(false)}
                />
                <div className="flex justify-center items-center gap-3 pt-4">
                    {Array.from({length: total}, (_,index) => 
                        index == imageIndex ? 
                        <div 
                            key={index} 
                            className="h-3 w-3 bg-background rounded-2xl hover:cursor-pointer"
                            onClick={()=>setImageIndex(index)}
                        /> : 
                        <div 
                            key={index} 
                            className="h-3 w-3 bg-red rounded-2xl hover:cursor-pointer"
                            onClick={()=>setImageIndex(index)}
                        />
                    )}
                </div>
            </div>

            {!isActive &&
                <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-4 bg-black/75 backdrop-blur-xs p-16 z-100">
                    <button 
                        className="self-start"
                        onClick={()=>setIsActive(true)}
                    >
                        <TextHighlight>x</TextHighlight>
                    </button>
                    <div className="relative w-[85vw] h-[85vh] max-w-[95vw] max-h-[85vh]">
                        <Image
                            src={eventSummaries[images[imageIndex]].image}
                            alt={eventSummaries[images[imageIndex]].name}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            }
        </>
    );
};
export default Carousel;