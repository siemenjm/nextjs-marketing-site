import Image from "next/image";
import Link from "next/link";
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import siteLogo from '../public/images/generic_logo.png';
import style from '../styles/Header.module.css';
import { useState } from "react";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleClick() {
        setToggleMenu(true);
    }

    return (
        <div className={style.header}>
            <Image
                priority
                src={siteLogo}
                alt='site logo'
                width={130}
            />
            <nav>
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
                <FaBars className={`${style.icon} ${style.tablet}`} />
            </nav>
        </div>
    )
}
