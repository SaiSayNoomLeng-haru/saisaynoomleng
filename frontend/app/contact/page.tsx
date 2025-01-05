'use client'

import clsx from "clsx"
import { CiClock2, CiMail, CiPhone } from "react-icons/ci"
import { SendForm } from "../query/route"

export default function Contact(){

    // classes and styles
    const contactPage = clsx(
        'custom-container space-y-10'
    )

    const formClass = clsx(
        'flex flex-col gap-5'
    )

    const inputBoxes = clsx(
        'flex flex-col gap-1'
    )

    const labels = clsx(
        'after:content-["*"] after:text-custom-red'
    )

    const inputs = clsx(
        'outline-none border-b bg-transparent',
        'focus:border-b-custom-green'
    )
    return(
        <section className={contactPage}>
            <p>Contact <span className="text-custom-green">Me</span></p>

            <form 
                className={formClass}
                action={SendForm}>
                <div className={inputBoxes}>
                    <label htmlFor="name" className={labels}>Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        className={inputs}
                        autoComplete="off"
                        required/>
                </div>

                <div className={inputBoxes}>
                    <label htmlFor="email" className={labels}>Email</label>
                    <input 
                        type="email"
                        id="message"
                        name="email"
                        className={inputs}
                        autoComplete="off"
                        required />
                </div>

                <div className={inputBoxes}>
                    <label htmlFor="message" className={labels}>Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        className='border indent-2 rounded-sm outline-none focus:border-custom-green py-5'
                        required></textarea>
                </div>

                <button className="inline-block px-4 py-4 font-semibold border border-custom-green rounded-sm text-custom-green">Send Message</button>
            </form>

            <div className="grid grid-cols-2 gap-3 text-fs-200 text-center">
                <div className="border border-gray-800 p-3 flex flex-col items-center justify-center gap-4">
                    <CiPhone className="text-fs-500 text-custom-green"/>
                    <p>+1 (660) 310 2124</p>
                </div>

                <div className="border border-gray-800  p-3 flex flex-col items-center justify-center gap-4">
                    <CiClock2 className="text-fs-500 text-custom-green"/>
                    <p>Available for part-time, full-time and freelance.</p>
                </div>

                <div className="border border-gray-800 col-span-full p-3 flex flex-col items-center justify-center gap-4">
                    <CiMail className="text-fs-500 text-custom-green"/>
                    <p>saisaynoomleng.haru.9723@gmail.com</p>
                </div>
            </div>

          
        </section>
    )
}