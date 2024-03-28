
import React from 'react'
import { Container } from './Container'
import Link from 'next/link'

export default function OtherEnterprises({ enterpriseSlug = 'jardins-de-vivara' }: { enterpriseSlug?: string }) {

    const enterprises = [
        {
            id: 1,
            local: 'Rio de Janeiro',
            slug: 'rio-de-janeiro',
            img: '/img/enterprises/rio-de-janeiro/bg-hero.jpg'
        },
        {
            id: 2,
            local: 'Jardins de Vivara',
            slug: 'jardins-de-vivara',
            img: '/img/enterprises/jardins-de-vivara/bg-hero.jpg'
        },
        {
            id: 3,
            local: 'Vivare Garden',
            slug: 'vivare-garden',
            img: '/img/enterprises/vivare-garden/bg-hero.jpg'
        },
        {
            id: 4,
            local: 'Reserva Bolonha',
            slug: 'reserva-bolonha',
            img: '/img/enterprises/reserva-bolonha/bg-hero.png'
        },
    ]

    return (
        <div className='py-6 mt-16 bg-[#F7F7F7]'>
            <Container>
                <p className="text-[#1ea69a] pt-8 pb-4 font-bold">Outros Empreendimentos</p>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {enterprises.filter(enteprise => enteprise.slug != enterpriseSlug).map(enterprise => (
                        <Link key={enterprise.id} href={`/imovel/${enterprise.slug}`}>
                            <div className='w-full shadow-sm shadow-gray-300'>
                                <div className={`group relative h-80 lg:h-52 w-full overflow-hidden cursor-pointer`}>
                                    <div className='absolute translate-y-80 lg:translate-y-52 group-hover:translate-y-0 transition-all duration-300 flex justify-center items-center h-full w-full bg-[#1ea69a] bg-opacity-70'>
                                        <div className='border border-white py-2 px-4 font-bold hover:bg-white text-white hover:text-[#1ea69a] transition-all duration-300'>
                                            Saiba Mais
                                        </div>
                                    </div>
                                    <img src={enterprise.img} className='h-80 lg:h-52 w-full object-cover ob' alt="" />
                                </div>
                                <div className='p-4 bg-white'>
                                    <p className='font-bold'>{enterprise.local}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </Container>
        </div>
    )
}
