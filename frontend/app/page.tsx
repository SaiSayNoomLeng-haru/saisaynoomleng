'use client'

import clsx from "clsx";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";


export default function Home() {

  // classes and styles
  const homePage = clsx(
    'min-h-[90vh] relative custom-container grid py-5'
  )

  const typewriter = clsx(
    'flex items-center tracking-widest font-mono  whitespace-nowrap overflow-hidden w-[25ch] relative place-self-center relative z-20'
  )

  const text = clsx(
    'inline-block animate-typing overflow-hidden'
  )

  const cursor = clsx(
    'inline-block animate-blink text-fs-500'
  )
  return (
    <div className={`${homePage} homepage`}>

      <div className={typewriter}>
        <span className={text}>I develop <span className="text-custom-green font-semibold ">Web Apps.</span></span>
        <span className={cursor}> |</span>
      </div>

      <Image 
          src='/assets/images/myPhoto1.png'
          width={800}
          height={800}
          alt="my portrait"
          className="absolute bottom-0 z-0 max-w-[80%] place-self-center mix-blend-overlay"
          priority
          />

      <div className="flex items-center justify-between justify-self-center self-end max-w-[80%] relative z-20">  
          <p className="text-fs-300 md:text-fs-400">Hello, I'm <span className="text-custom-green font-semibold">Sai Say Noom Leng</span>, Front-end Developer Based in Columbia, MO.</p>

          <Link 
            href='/about-me' 
            className="animate-bounce">
            <IoIosArrowDown className="text-custom-red text-fs-600" />
          </Link>
      </div>

    </div>
  );
}
