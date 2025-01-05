'use client';

import clsx from "clsx";
import Link from "next/link";
import { GoSun } from "react-icons/go";
import { PiMoonThin } from "react-icons/pi";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { navLinks } from "../definitions";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import classNames from "classnames";

export default function Navbar({
    className = '',
}: {
    className: string
}){
    const { setTheme, resolvedTheme } = useTheme();
    const pathname = usePathname();
    const [ navOpen, setNavOpen ] = useState<boolean>(false);

    const navLinks = [
        { name: 'Home', url: '/'},
        { name: 'About Me', url: '/about-me'},
        { name: 'Resume', url: '/resume'},
        { name: 'Portfolio', url: '/portfolio'},
        { name: 'Certificates', url: '/certificates'},
        { name: 'Contact', url: '/contact'}
    ]

    // classes and styles
    const headerClass = clsx(
        'flex justify-between items-center custom-container text-fs-300', className
    )

    const navClass = clsx(
        'flex mobile:flex-col gap-2 mobile:fixed mobile:top-0 mobile:left-0 mobile:right-0 mobile:bottom-0 items-center transition duration-500 mobile:bg-gray-800 mobile:py-[10vh] mobile:z-30',
        'md:translate-x-0 md:flex-row md:static ',
        {
            'mobile:translate-x-0' : navOpen,
            'mobile:translate-x-full' : !navOpen
        }
    )

    const mobileNavToggle = clsx(
        'hidden',
        'mobile:block mobile:absolute mobile:right-[1rem] z-40'
    )

    return(
        <header className={headerClass}>
            { resolvedTheme === 'dark' ?
                <GoSun  
                    onClick={() => setTheme('light')}/> :
                <PiMoonThin  
                    onClick={() => setTheme('dark')}/>
            }

            <button 
                aria-label="navbar toggle button"
                aria-expanded={navOpen}
                className={mobileNavToggle}
                aria-controls="#main-nav"
                onClick={() => setNavOpen(prevOpen => !prevOpen)}>
                    {
                        navOpen ? 
                        <IoCloseSharp /> :
                        <RxHamburgerMenu />
                    }
            </button>

            <nav 
                id="main-nav"
                className={navClass} 
                role="navigation">
                { navLinks.map((link: navLinks) => (
                    <Link
                        key={link.name}
                        href={link.url}
                        className={clsx(
                            {
                                'font-semibold border-b-2 border-custom-green' : pathname === link.url 
                            }
                        )}
                        onClick={() => setNavOpen(prevOpen => !prevOpen)}>
                            {link.name}
                    </Link>
                ))

                }
            </nav>
        </header>

    )
}