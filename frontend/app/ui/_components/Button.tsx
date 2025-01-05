
import clsx from "clsx";
import { ReactEventHandler, ReactNode } from "react";

export default function Button({
    className = '', children, handleClick
} : { children: ReactNode; className: string; handleClick: ReactEventHandler}){

    // classes and styles
    const buttonClass = clsx(
        '', className
    )
    return(
        <button className={buttonClass} onClick={handleClick}>{children}</button>
    )
}