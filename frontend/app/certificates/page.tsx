'use client'

import clsx from "clsx"
import { certificates, courses } from "../ui/definitions"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useEffect, useState } from "react"
import { getCertificates } from "../query/route"
import Certificate from "../ui/_components/Certificate"
import Link from "next/link"

export default function Certificates() {
    const [certificates, setCertificates] = useState<certificates[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [activeFilter, setActiveFilter] = useState<{ key: string | null, value: string | null }>({ key: null, value: null });

    const loadCertificate = async (key: string | null = null, value: string | null = null, page = 1) => {
        const { certificates: data, pagination } = await getCertificates(key, value, page);
        setCertificates(data);
        setTotalPage(pagination.pageCount);
    }

    useEffect(() => {
        loadCertificate(activeFilter.key, activeFilter.value, currentPage);
    }, [currentPage, activeFilter]);

    const handleFilterChange = (key: string, value: string) => {
        setActiveFilter({ key, value });
        setCurrentPage(1); 
    }

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPage) {
            setCurrentPage(newPage);
        }
    }

    const clearFilter = () => {
        setActiveFilter({ key: null, value: null });
        setCurrentPage(1);
    }

    const courses = [
        { type: 'specialization', key: 'type', value: 'specialization' },
        { type: 'crash course', key: 'type', value: 'crash' },
        { type: 'scrimba', key: 'provider', value: 'scrimba' },
        { type: 'packt', key: 'provider', value: 'packt' },
        { type: 'meta', key: 'provider', value: 'meta' },
        { type: 'University of California, Davis', key: 'provider', value: 'university of california davis' },
        { type: 'University of California, Irvine', key: 'provider', value: 'university of california irvine' },
        { type: 'Coursera project network', key: 'provider', value: 'coursera project network' },
        { type: 'Coursera instructor network', key: 'provider', value: 'coursera instructor network' }
    ];

    // classes and styles
    const certificatesPage = clsx(
        'custom-container space-y-10'
    );

    const filterComponent = clsx(
        'flex flex-col gap-3 text-fs-300 border-r border-r-gray-800 pr-5'
    );

    const itemComponent = clsx(
        'grid grid-cols-1 md:grid-cols-2 gap-2 p-5'
    );

    return (
        <section className={certificatesPage}>
            <p>My <span className="text-custom-green">Certificates</span></p>

            <div className="grid grid-cols-filter-grid min-h-screen">
                <div className={filterComponent}>
                    <div className="flex justify-between">
                        <p className="text-custom-green font-semibold">Filters</p>
                        <button 
                            onClick={clearFilter} 
                            className="text-fs-200 text-custom-red flex gap-2 items-center">
                            Clear Filter <IoIosCloseCircleOutline />
                        </button>
                    </div>

                    {courses.map((course: courses) => (
                        <p 
                            key={course.type}
                            className={clsx(
                                'text-fs-200 capitalize cursor-pointer',
                                activeFilter.key === course.key && activeFilter.value === course.value
                                    ? 'text-custom-green font-semibold' 
                                    : 'text-custom-red' 
                            )}
                            onClick={() => handleFilterChange(course.key, course.value)}>
                            {course.type}
                        </p>
                    ))}
                </div>

                <div className={itemComponent}>
                    {certificates.map((certificate: certificates) => (
                        <Link
                            key={certificate.id}
                            href={`/certificates/${certificate.documentId}`}>
                            <Certificate 
                            imageUrl={certificate.imgUrl.formats.medium.url}
                            title={certificate.title}
                            skillGained={certificate.skillGained}
                        />
                        </Link>
                    ))}

                    <div className="flex justify-center items-center space-x-4 mt-4 place-self-center col-span-full text-fs-200">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span>
                            Page {currentPage} of {totalPage}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPage}
                            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


