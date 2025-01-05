import clsx from "clsx"
import { BiLogoJquery } from "react-icons/bi"
import { FaBootstrap, FaCss3Alt, FaFigma, FaGit, FaGithub, FaHtml5, FaReact } from "react-icons/fa"
import { IoAccessibilitySharp, IoLogoJavascript } from "react-icons/io5"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiReactrouter, SiStrapi, SiTypescript } from "react-icons/si"

export default function AboutMe(){

    // classes and styles
    const aboutPage = clsx(
        'custom-container grid gap-5'
    )
    return(
        <section className={aboutPage}>
            <p>About <span className="text-custom-green">Me</span></p>

            <p className="first-letter:text-fs-700 first-letter:mr-5 first-letter:float-start first-letter:text-custom-green text-justify text-fs-300">I am a self-taught developer currently learning and working on front-end. I'm an active student at Columbia College, Missouri majoring in Computer Science. I started off my software engineering journey with web programming. I love web technologies especially JavaScript.</p>

            <p className="text-justify text-fs-300">Proficient in <span className="text-custom-green">Modern Web Framewroks and Libraries</span> such as <span className="text-custom-green font-semibold">ReactJS, Next.js and TailwindCSS.</span> As a front-end web developer, I'm confident in working with <span className="text-custom-green">APIs, Responsive Web Designs</span> and my primary focus is on <span className="text-custom-green">user-friendly experiences that meet the needs of a diverse online audience.</span></p>

            <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-5 grid-flow-dense">
                <p className="col-span-full text-center text-gray-500">Programming Languages and technologies I'm confident with</p>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaHtml5 />
                    <p className="text-fs-300 text-gray-500">HTML</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaCss3Alt />
                    <p className="text-fs-300 text-gray-500">CSS</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <IoLogoJavascript />
                    <p className="text-fs-300 text-gray-500">JavaScript</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaBootstrap />
                    <p className="text-fs-300 text-gray-500">Bootstrap</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <RiTailwindCssFill />
                    <p className="text-fs-300 text-gray-500">TailwindCSS</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <BiLogoJquery />
                    <p className="text-fs-300 text-gray-500">jQuery</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaReact />
                    <p className="text-fs-300 text-gray-500">ReactJS</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <img src="/assets/images/mirageJS.png" alt="mirage JS logo" loading="lazy" className="w-[50px]" />
                    <p className="text-fs-300 text-gray-500">MirageJS</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <SiReactrouter />
                    <p className="text-fs-300 text-gray-500">React Router</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaGit />
                    <p className="text-fs-300 text-gray-500">Git</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaGithub />
                    <p className="text-fs-300 text-gray-500">GitHub</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <RiNextjsFill />
                    <p className="text-fs-300 text-gray-500">Next.js</p>
                </div>
                
                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <SiTypescript />
                    <p className="text-fs-300 text-gray-500">TypeScript</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <SiStrapi />
                    <p className="text-fs-300 text-gray-500">Strapi</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <FaFigma />
                    <p className="text-fs-300 text-gray-500">Figma</p>
                </div>

                <div className="text-fs-600 text-custom-green flex flex-col items-center gap-2">
                    <IoAccessibilitySharp />
                    <p className="text-fs-300 text-gray-500">Web Accessibility</p>
                </div>
            </div>
        </section>

    )
}