import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import siteLogo from '../public/images/generic_logo.png';
import style from '../styles/Header.module.css';

const pages = [
    {
        path: '/',
        pageTitle: 'Home',
    },
    {
        path: '/about',
        pageTitle: 'About',
    },
    {
        path: '/contact',
        pageTitle: 'Contact',
    },
];

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
                    {pages.map((page) => {
                        return (
                            <li key={page.path} >
                                <Link href={page.path}>{page.pageTitle}</Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className={`${style.navList} ${style.tablet} ${transition}`}>
                    <div>
                        <li>
                            <div className={`${style.iconContainer} ${style.shiftRight}`}>
                                <FaRegWindowClose onClick={handleClick} className={`${style.icon} ${style.tablet}`} />
                            </div>
                        </li>
                        {pages.map((page) => {
                        return (
                            <li key={page.path} >
                                <Link href={page.path}>{page.pageTitle}</Link>
                            </li>
                        );
                    })}
                    </div>
                </ul>
                {toggleMenu ?
                    <></> 
                :
                    <div className={`${style.iconContainer} ${style.tablet}`}>
                        <FaBars onClick={handleClick} className={style.icon} />
                    </div>
                }
            </nav>
        </div>
    )
}
