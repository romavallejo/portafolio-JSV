'use client'
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle, AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface CarouselProps {
    images: string[],
    changable: boolean,
    aspectRatio?: string,
}

const Carousel = ({ images, changable, aspectRatio }: CarouselProps) => {

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setImageIndex(i => (i + 1) % total);
        }, 8000);
    };

    if (!images || images.length === 0)
        return <div>No images available</div>;
    
    const [imageIndex,setImageIndex] = useState(0);
    const[isActive,setIsActive] = useState(true);
    const total = images.length;

    const switchImage = (index: number) => {
        setImageIndex(index);
        if (isActive) startInterval();
    }

    useEffect(()=>{
        if (!isActive) return;

        startInterval();

        return () => {if(intervalRef.current) clearInterval(intervalRef.current)};
    },[isActive, total]);

    return (
        <>

            {/* CAROUSEL HOLDER */}
            <div className="flex flex-col items-center w-full">

                {/* IMAGE HOLDER */}
                <div
                    className={`relative w-full max-w-225 overflow-hidden ${
                        aspectRatio ?? "aspect-13/9"
                    }`}
                >

                    {(changable && isActive) && 
                        <>
                            <motion.button 
                                className="text-white text-4xl mask-r-to-100% absolute w-[10%] h-full z-101 flex  justify-center items-center bg-black/70 hover:cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.25 }}
                                onClick={()=>switchImage(imageIndex-1 < 0 ? total-1 : imageIndex-1)}
                            >
                                <AiFillCaretLeft />
                            </motion.button>
                            <motion.button 
                                className="text-white text-4xl mask-l-to-100% absolute w-[10%] right-0 h-full z-101 flex  justify-center items-center bg-black/70 hover:cursor-pointer"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.25 }}
                                onClick={()=>switchImage((imageIndex+1)%total)}
                            >
                                <AiFillCaretRight />
                            </motion.button>
                        </>
                    }

                    <div className="absolute inset-0">
                        {images.map((src, i) => (
                            <motion.div
                            key={i}
                            className="absolute inset-0"
                            animate={{ opacity: i === imageIndex ? 1 : 0 }}
                            transition={{ duration: 0.5 }}
                            >
                                <Image
                                    src={src}
                                    alt=""
                                    fill
                                    className="object-cover hover:cursor-pointer"
                                    onClick={() => setIsActive(false)}
                                    preload={true}
                                />
                            </motion.div>
                        ))}
                    </div>
                    
                </div>

                {/* DOT INDICATORS */ }
                {changable && 
                    <div className="flex gap-3 pt-1.5 -mb-4.5">
                    {Array.from({length: total}, (_,index) => 
                        <motion.div 
                            key={index} 
                            className="h-3 w-3 bg-background rounded-2xl hover:cursor-pointer"
                            onClick={()=>switchImage(index)}
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
                            className="self-end hover:cursor-pointer"
                            onClick={()=>setIsActive(true)}
                        >
                            <AiFillCloseCircle size={48} className="text-red-light"/>
                        </motion.button>

                        <div className="relative w-[90vw] h-[90vh] max-w-[95vw] max-h-[90vh]">
                            <Image
                                src={images[imageIndex]}
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