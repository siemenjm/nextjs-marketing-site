import Image from "next/image";
import Link from "next/link";
import siteLogo from '../public/images/generic_logo.png';
import style from '../styles/Header.module.css';

export default function Header() {
    return (
        <div className={style.header}>
            <Image
                priority
                src={siteLogo}
                alt='site logo'
                width={130}
            />
            <nav>
                <ul className={style.navList}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
