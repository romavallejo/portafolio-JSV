import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="flex justify-center items-center gap-8 p-5 border-b-2 border-merge">
                    <li className='text-4xl ml-7 mr-auto font-extrabold'><Link href="/">JSV</Link></li>
                    <li className='text-lg'><Link href="/about">Sobre mi</Link></li>
                    <li className='text-lg'><Link href="/events">Eventos</Link></li>
                    <li className='text-lg text-background bg-red-light p-2 rounded-xl mr-7'><Link href="contact">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;