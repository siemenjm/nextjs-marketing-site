import Image from "next/image";
import Link from "next/link";
import MediaQuery from 'react-responsive';
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
                <MediaQuery minWidth={1025}>
                    <ul className={`${style.navList} ${style.desktop}`}>
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
                </MediaQuery>
                <MediaQuery maxWidth={1024}>
                    <ul className={`${style.navList} ${style.tablet}`}>
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
                </MediaQuery>
            </nav>
        </div>
    )
}
