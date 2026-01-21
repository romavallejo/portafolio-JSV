import Link from 'next/link'

const Header = () => {
    return (
        <footer>
            <nav>
                <ul className="flex justify-center items-center gap-8 p-5 border-t-2 border-merge">
                    <li className='text-xl font-extrabold uppercase'><Link href="/">Jimena Santillana</Link></li>
                    <li><a href="https://ddtech.mx/" target="_blank" rel="noopener noreferrer">InstagramLogo</a></li>
                    <li><a href="https://ddtech.mx/" target="_blank" rel="noopener noreferrer">LinkedinLogo</a></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Header;