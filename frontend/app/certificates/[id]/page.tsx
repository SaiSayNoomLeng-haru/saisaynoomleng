import { getCertificateDetails } from "@/app/query/route"
import clsx from "clsx";

export default async function CertificateDetail({
    params 
}:{
    params: Promise<{id: string}>
}){
    const id = ( await params).id;
    const data = await getCertificateDetails(id);
    
    const {
        awardedDate,
        provider,
        skillGained,
        title,
        type,
        imgUrl
    } = data

    // classes and styles
    const certiDetail = clsx(
        'custom-container grid gap-5'
    )
    return(
        <section className={certiDetail}>
            <p className="text-custom-green">{title}</p>

            <img
                src={`http://127.0.0.1:1337${imgUrl.formats.large.url}`}
                alt={`${title}'s certificate photo`}
                aria-label={`${title}'s certificate photo`}
                loading="lazy"
                className="rounded-sm" />
        </section>
    )
}