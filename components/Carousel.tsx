'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import TextHighlight from '@/components/TextHighlight';
import { eventSummaries } from '../data/eventsSummary'
import { motion, AnimatePresence } from "framer-motion";
import { image } from "motion/react-client";

interface CarouselProps {
    images: number[] | string[],
    changable: boolean,
}

const Carousel = ({ images, changable }: CarouselProps) => {

    if (!images || images.length === 0)
        return <div>No images available</div>;
    
    let usingNumbers = false;
    if (typeof images[0] === "number")
        usingNumbers = true
    
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

                {/* IMAGE HOLDER */}
                <div className="relative w-full max-w-225 aspect-13/9 overflow-hidden">

                    {changable && 
                        <>
                            <motion.button 
                                className="text-merge text-4xl font-extrabold mask-r-from-30% absolute w-[10%] h-full z-101 flex  justify-center items-center bg-black/70 hover:cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.25 }}
                                onClick={()=>setImageIndex(imageIndex-1 < 0 ? total-1 : imageIndex-1)}
                            >
                                &lt;
                            </motion.button>
                            <motion.button 
                                className="text-merge text-4xl font-extrabold mask-l-from-30% absolute w-[10%] right-0 h-full z-101 flex  justify-center items-center bg-black/70 hover:cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.25 }}
                                onClick={()=>setImageIndex((imageIndex+1)%total)}
                            >
                                &gt;
                            </motion.button>
                        </>
                    }

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={imageIndex}
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1, }}
                            exit={{ opacity: 0,  }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                        <Image
                            src={usingNumbers ? 
                                `/images/${eventSummaries[images[imageIndex]].id}/${eventSummaries[images[imageIndex]].id}_0.jpg`
                                : images[imageIndex]
                            }
                            alt="Imagen de evento"
                            fill
                            className="object-cover hover:cursor-pointer"
                            onClick={() => setIsActive(false)}
                            priority
                        />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* DOT INDICATORS */ }
                {changable && 
                    <div className="flex gap-3 pt-1.5 -mb-4.5">
                    {Array.from({length: total}, (_,index) => 
                        <motion.div 
                            key={index} 
                            className="h-3 w-3 bg-background rounded-2xl hover:cursor-pointer"
                            onClick={()=>setImageIndex(index)}
                            animate={{
                                scale: index === imageIndex ? 1.3 : 1,
                                opacity: index === imageIndex ? 1 : 0.4
                            }}
                            transition={{ duration: 0.25 }}
                            style={{ background: "white" }}
                        /> 
                    )}
                </div>
                }
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
                        <motion.button
                            whileHover={{ scale: 1.3}} 
                            className="bg-red-light self-end hover:cursor-pointer"
                            onClick={()=>setIsActive(true)}
                        >
                            f
                        </motion.button>
                        <div className="relative w-[85vw] h-[85vh] max-w-[95vw] max-h-[85vh]">
                            <Image
                                src={usingNumbers ? 
                                    `/images/${eventSummaries[images[imageIndex]].id}/${eventSummaries[images[imageIndex]].id}_0.jpg`
                                    : images[imageIndex]
                                }
                                alt="Imagen de evento"
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