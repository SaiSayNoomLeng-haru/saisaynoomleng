'use client';

import clsx from "clsx";
import Link from "next/link";
import { GoSun } from "react-icons/go";
import { PiMoonThin } from "react-icons/pi";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { navLinks } from "../definitions";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar({
    className = '',
}: {
    className: string
}){
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);
    const pathname = usePathname();
    const [ navOpen, setNavOpen ] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!mounted){
        return null
    }

    const navLinks = [
        { name: 'Home', url: '/'},
        { name: 'About Me', url: '/about-me'},
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
        navOpen ? 'mobile:translate-x-0' : 'mobile:translate-x-full'
    )

    const mobileNavToggle = clsx(
        'hidden',
        'mobile:block mobile:absolute mobile:right-[1rem] z-40'
    )

    return(
        <header className={headerClass}>
            <div className="flex gap-4 items-center">
                <Link
                    href='/'
                    className="capitalize text-fs-200 font-bold text-custom-green">
                        Sai Say Noom Leng
                </Link>

                { theme === 'dark' ?
                    <button  onClick={() => setTheme('light')}>
                        <GoSun  />
                    </button>:
                    <button  onClick={() => setTheme('dark')}>
                        <PiMoonThin  
                       />

                    </button>
                }

            </div>

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