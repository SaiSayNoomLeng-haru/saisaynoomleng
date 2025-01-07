'use client'

import clsx from "clsx"
import { Portfolios } from "../ui/definitions"
import PortfolioCard from "../ui/_components/Portfolio-card"
import { useEffect, useState } from "react"
import { getPortfolio } from "../query/route"

export default function Portfolio(){
    const [ portfolio, setPortfolio ] = useState<Portfolios[]>([]);
    const [ currentPage, setCurrentPage ] = useState<number>(1);
    const [ totalPage, setTotalPage ] = useState<number>(1);
    const [ activeFilter, setActiveFilter ] = useState<{key: string | null, value: string | null}>({ key: null, value: null});
    // const languageFilter = [
    //     { name: 'languageUsed', value: 'JavaScript' },
    //     { name: 'languageUsed', value: 'Next.js' },
    //     { name: 'languageUsed', value: 'ReactJS'},
    //     { name: 'languageUsed', value: 'Strapi'}
    // ];

    const loadPortfolios = async (key: string | null, value: string | null, page: number, pageSize: number) => {
        const { portfolios: data, pagination} = await getPortfolio(key, value, page);
        setPortfolio(data);
        setTotalPage(pagination.pageCount);
    }

    useEffect(() => {
       loadPortfolios(activeFilter.key, activeFilter.value, currentPage, 3)
    }, [ currentPage, activeFilter])
    
    const handlePageClick = (page: number) => {
        if( page >= 1 && page <= totalPage){
            setCurrentPage(page)
        }
    }

    // const handleFilterChange = (key: string, value: string ) => {
    //     setActiveFilter({key, value});
    //     setCurrentPage(1);
    // }

    // classes and styles
    const projectPortfolio = clsx(
        'custom-container grid gap-5'
    )
    return(
        <section className={projectPortfolio}>
            <p>My <span className="text-custom-green">Works</span></p>
            {/* <div className="flex gap-3 flex-wrap">
              { languageFilter.map((filter: { name: string, value: string }) => (
                <button
                    key={filter.value}
                    className={clsx(
                        'bg-custom-green px-2 py-1 rounded-lg ',
                        activeFilter.value === filter.value 
                        ? 'bg-custom-green text-black'
                        : 'bg-gray-500 text-white'
                    )}
                    onClick={() => handleFilterChange(filter.name, filter.value)}
                    >
                        {filter.value}
                </button>
              ))}

            </div> */}

            <div className="flex flex-col gap-4">
                { portfolio.map((port : Portfolios) => (
                    <PortfolioCard
                        key={port.name}
                        {...port} />
                ))}
            </div>

            <div className="justify-self-center self-end flex items-center gap-3">
                {Array.from({ length: totalPage }, (_, index) => (
                <button
                    key={index}
                    className={clsx(
                    "px-3 py-1 border rounded",
                    currentPage === index + 1
                        ? "bg-custom-green text-white"
                        : "bg-white text-black"
                    )}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </button>
                ))}
            </div>

            

        </section>
       
    )
}