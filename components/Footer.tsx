import Link from 'next/link'
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <footer>
            <nav>
                <ul className="flex  justify-center items-center gap-8 p-5 border-t-2 border-merge">
                    <li className='text-xl font-extrabold uppercase'><Link href="/">Jimena Santillana</Link></li>
                    <li><a href="https://www.instagram.com/jim.santi.val?igsh=cGJxdDc2MWoxbWpj" target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size={32} className='text-foreground'/>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/jimena-santillana/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={32} className='text-foreground'/>
                    </a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Header;