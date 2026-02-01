'use client'
import { useState } from "react";
import Link from 'next/link'
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import TextHighlight from './TextHighlight';

const SideNavegationBar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    return (
        <nav className='block sm:hidden'>
            
            <ul className="flex justify-center items-center gap-8 p-5 border-b-2 border-merge">
                <li className='text-3xl mr-auto font-extrabold uppercase'><Link href="/">Jimena Santillana</Link></li>
                <li className='text-3xl font-extrabold uppercase'>
                    <button 
                        className='flex items-center'
                        onClick={()=>setIsSideNavOpen(true)}
                    >
                        <AiOutlineMenu />
                    </button>
                </li>
            </ul>

            { isSideNavOpen &&
            
            <div className="fixed h-screen inset-0 bg-background/90 backdrop-blur-sm p-16">
                <ul className="flex flex-col items-center justify-center gap-8 p-5">
                    <button
                        className='flex items-center'
                        onClick={()=>setIsSideNavOpen(false)}
                    >
                        <AiFillCloseCircle size={48}/>
                    </button>
                    <li className='text-2xl'>
                        <Link href="/about" onClick={()=>setIsSideNavOpen(false)}>
                            Sobre mi
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link href="/events" onClick={()=>setIsSideNavOpen(false)}>
                            Eventos
                        </Link>
                    </li>
                    <li className='text-2xl'>
                        <Link href="contact" onClick={()=>setIsSideNavOpen(false)}>
                            <TextHighlight>Contacto</TextHighlight>
                        </Link>
                    </li>
                </ul>
            </div>
                
            }

        </nav>
    );
}; export default SideNavegationBar;