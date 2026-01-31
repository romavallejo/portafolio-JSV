"use client"
import Link from 'next/link'
import TextHighlight from './TextHighlight';
import SideNavegationBar from './SideNavegationBar';
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useState } from "react"

const Header = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return (
        <motion.header 
            animate={{
                y: hidden ? -140 : 0,
                opacity: hidden ? 0 : 1,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className='sticky top-0 bg-background/90 backdrop-blur-lg z-999'
        >
            <nav className='hidden sm:block'>
                <ul className="flex justify-center items-center gap-8 p-5 border-b-2 border-merge">
                    <li className='text-3xl mr-auto font-extrabold uppercase'><Link href="/">Jimena Santillana</Link></li>
                    <li className='text-lg'><Link href="/about">Sobre mi</Link></li>
                    <li className='text-lg'><Link href="/events">Eventos</Link></li>
                    <li className='text-lg'><Link href="contact"><TextHighlight>Contacto</TextHighlight></Link></li>
                </ul>
            </nav>

            <SideNavegationBar />

        </motion.header>
    );
}

export default Header;