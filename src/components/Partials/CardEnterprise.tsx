import Link from 'next/link';
import React from 'react'

type Enterprise = {
    id: number;
    local: string;
    slug: string;
    img: string;
}

export default function CardEnterprise({ enterprise }: { enterprise: Enterprise }) {
    return (
        <Link href={`/imovel/${enterprise.slug}`}>
            <div className='mx-auto sm:w-64 group p-2 shadow-gray-300 shadow-md hover:bg-[#DEDEDE] transition-all duration-400 overflow-hidden rounded-sm'>
                <div className={`flex-1 bg-white`}>
                    <div className='w-full'>
                        <div className='flex items-center justify-center sm:w-60 h-60 sm:h-40 overflow-hidden'>
                            <img src={enterprise?.img} className='group-hover:scale-125 w-full transition-all duration-500' />
                        </div>
                        <a href="">
                            <div className='flex-1 py-6'>
                                <h2 className='text-center text-xl mb-2 font-bold text-[#99161D]'>{enterprise?.local}</h2>
                                <div className='border border-[#99161D] text-[#99161D] text-center text-lg w-40 mx-auto py-1'>Saiba Mais</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Link>
    )
}
