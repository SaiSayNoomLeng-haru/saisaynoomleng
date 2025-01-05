import clsx from "clsx"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

export default function SocialLinks({className = ''}){
    const socialClass = clsx(
        'flex flex-col gap-5 px-2 items-center py-4', className
    )
    return(
        <div className={socialClass}>
            <Link
                href='https://www.linkedin.com/in/sai-say-noom-leng-72a94031a/'
                className="text-custom-green"
                >
                    <FaLinkedin />
            </Link>

            <Link
                href='https://github.com/SaiSayNoomLeng-haru'
                className="text-custom-green">
                    <FaGithub />
            </Link>

            <Link
                href=''
                className="text-custom-green">
                    <SiLeetcode />
            </Link>


        </div>
    )
}