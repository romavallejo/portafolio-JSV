import Link from 'next/link'
import TextHighlight from './TextHighlight';
import SideNavegationBar from './SideNavegationBar';


const Header = () => {
    return (
        <header>

            <nav className='hidden sm:block'>
                <ul className="flex justify-center items-center gap-8 p-5 border-b-2 border-merge">
                    <li className='text-3xl ml-7 mr-auto font-extrabold uppercase'><Link href="/">Jimena Santillana</Link></li>
                    <li className='text-lg'><Link href="/about">Sobre mi</Link></li>
                    <li className='text-lg'><Link href="/events">Eventos</Link></li>
                    <li className='text-lg'><Link href="contact"><TextHighlight>Contacto</TextHighlight></Link></li>
                </ul>
            </nav>

            <SideNavegationBar />

        </header>
    );
}

export default Header;