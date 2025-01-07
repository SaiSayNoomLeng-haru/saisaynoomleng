import clsx from "clsx"
import Link from "next/link"
import { imageUrl } from "../definitions"
import { FaExternalLinkAlt } from "react-icons/fa"


export default function PortfolioCard({
    name, type, languageUsed, url, imageUrl
}:{
    name: string
    type: string
    languageUsed: string[]
    url: string
    imageUrl: imageUrl
}){

    // classes and styles
    const portfolioCardClass = clsx(
        'flex flex-col md:flex-row gap-3 p-3 text-fs-300  bg-gray-800 rounded-sm'
    )
    return(
        <Link href={url}>
            <div className={portfolioCardClass}>
                <img
                    src={`http://127.0.0.1:1337${imageUrl.formats.small.url}`}
                    alt={`${name}'s screenshot photo`}
                    aria-label={`${name}'s screenshot photo`}
                    className={`rounded-sm max-w-[${imageUrl.formats.small.width}] mx-auto`}
                    loading="lazy"/>

                <div className="flex-1 grid gap-2">
                    <div>
                        <p className="text-custom-green capitalize font-bold">{name}</p>
                        <p className="">Type : <span className="text-custom-green">{type}</span></p>
                        <p className="flex flex-wrap gap-2 items-start">Language : 
                            {
                                languageUsed.map((lang: string, index: number) => (
                                    <span key={index} className="px-2 py-1 text-fs-200 bg-custom-green text-black rounded-sm">{lang}</span>
                                ))
                            }
                        </p>
                    </div>
                    <p className="flex gap-2 underline items-center text-custom-red place-self-end">Check Out <FaExternalLinkAlt className="text-fs-200" /></p>
                </div>
            </div>
        </Link>
    )
}