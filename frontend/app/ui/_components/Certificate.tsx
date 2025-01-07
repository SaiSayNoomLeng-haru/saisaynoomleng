import clsx from "clsx"

export default function Certificate({
    imageUrl, title, skillGained
}:{
    imageUrl : string
    title: string
    skillGained: string
}){

    // classes and styles
    const certificate = clsx(
        'flex flex-col gap-3 p-2 text-fs-200 max-h-[270px] '
    )
    return(
        <div className={certificate}>
            <img 
                src={`http://127.0.0.1:1337${imageUrl}`} 
                alt={title}
                aria-label={`${title}'s photo`}
                loading="lazy"
                className="rounded-sm" />
            
            <div className="">
                <p>Title: <span className="text-custom-green capitalize">{title}</span></p>
                <p>Topic: <span className="text-custom-red capitalize">{skillGained}</span></p>
            </div>
        </div>
    )
}