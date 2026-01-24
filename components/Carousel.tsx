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
    },[isActive, total]);

    return (
        <>
            {/* CAROUSEL HOLDER */}
            <div className="flex flex-col items-center w-full">

                {/* IMAGE HOLDER 
                    <Image
                        className="hover:cursor-pointer"
                        src={eventSummaries[images[imageIndex]].image}
                        width={900}
                        height={900}
                        alt={eventSummaries[images[imageIndex]].name}
                        onClick={()=>setIsActive(false)}
                    />
                */}
                <div className="relative w-full max-w-[900px] aspect-[16/9] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={imageIndex}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                        <Image
                            src={eventSummaries[images[imageIndex]].image}
                            alt={eventSummaries[images[imageIndex]].name}
                            fill
                            className="object-cover"
                            onClick={() => setIsActive(false)}
                            priority
                        />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* DOT INDICATORS */ }
                <div className="flex gap-3 pt-4">
                    {Array.from({length: total}, (_,index) => 
                        <motion.div 
                            key={index} 
                            className="h-3 w-3 bg-background rounded-2xl hover:cursor-pointer"
                            onClick={()=>setImageIndex(index)}
                            animate={{
                                scale: index === imageIndex ? 1.4 : 1,
                                opacity: index === imageIndex ? 1 : 0.4
                            }}
                            transition={{ duration: 0.25 }}
                            style={{ background: "white" }}
                        /> 
                    )}

                </div>
            </div>

            {/* FULLSCREEN MODAL FOR IMAGE */}
            <AnimatePresence>
                {!isActive &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex flex-col justify-center items-center gap-4 bg-black/75 backdrop-blur-xs p-16 z-100"
                    >
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
                    </motion.div>
                }
            </AnimatePresence>
        </>
    );
};
export default Carousel;