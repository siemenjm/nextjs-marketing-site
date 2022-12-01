import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import siteLogo from '../public/images/generic_logo.png';
import style from '../styles/Header.module.css';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    function handleClick() {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    }

    let transition;
    toggleMenu ? transition = style.transition : transition = ''; 

    return (
        <div className={style.header}>
            <Link href='/'>
                <Image
                    priority
                    src={siteLogo}
                    alt='site logo'
                    width={130}
                />
            </Link>
            <nav>
                <ul className={`${style.navList} ${style.desktop}`}>
                    <li>
                        <div className={`${style.iconContainer} ${style.shiftRight}`}>
                            <FaRegWindowClose onClick={handleClick} className={`${style.icon} ${style.tablet}`} />
                        </div>
                    </li>
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

                <ul className={`${style.navList} ${style.tablet} ${transition}`}>
                    <li>
                        <div className={`${style.iconContainer} ${style.shiftRight}`}>
                            <FaRegWindowClose onClick={handleClick} className={`${style.icon} ${style.tablet}`} />
                        </div>
                    </li>
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
                {toggleMenu ?
                    <></> 
                :
                    <div className={`${style.iconContainer}`}>
                        <FaBars onClick={handleClick} className={`${style.icon} ${style.tablet}`} />
                    </div>
                }
            </nav>
        </div>
    )
}
