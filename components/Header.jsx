import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import siteLogo from '../public/images/generic_logo.png';
import styles from '../styles/Header.module.css';

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
    toggleMenu ? transition = styles.transition : transition = ''; 

    return (
        <div className={styles.header}>
            <Link href='/'>
                <Image
                    priority
                    src={siteLogo}
                    alt='site logo'
                    width={130}
                />
            </Link>
            <nav>
                <ul className={`${styles.navList} ${styles.desktop}`}>
                    {pages.map((page) => {
                        return (
                            <li key={page.path} >
                                <Link href={page.path}>{page.pageTitle}</Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className={`${styles.navList} ${styles.tablet} ${transition}`}>
                    <div>
                        <li>
                            <div className={`${styles.iconContainer} ${styles.shiftRight}`}>
                                <FaRegWindowClose onClick={handleClick} className={`${styles.icon} ${styles.tablet}`} />
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
                    <div className={`${styles.iconContainer} ${styles.tablet}`}>
                        <FaBars onClick={handleClick} className={styles.icon} />
                    </div>
                }
            </nav>
        </div>
    )
}
