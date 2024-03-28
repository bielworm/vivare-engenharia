import React from 'react'
import { Container } from '../Partials/Container'
import CardEnterprise from '../Partials/CardEnterprise'

export default function SectionEnterprisesHome() {

    const enterprises = [
        {
            id: 1,
            local: 'Rio de Janeiro',
            slug: 'rio-de-janeiro',
            img: '/img/enterprises/enterprise-rj-place.png'
        },
        {
            id: 2,
            local: 'Jardins de Vivara',
            slug: 'jardins-de-vivara',
            img: '/img/enterprises/enterprise-jardins-de-vivara.png'
        },
        {
            id: 3,
            local: 'Vivare Garden',
            slug: 'vivare-garden',
            img: '/img/enterprises/enterprise-vivare-garden.png'
        },
        {
            id: 4,
            local: 'Reserva Bolonha',
            slug: 'reserva-bolonha',
            img: '/img/enterprises/enterprise-reserva-bolonha.png'
        },
    ]

    return (
        <div className='py-12'>
            <Container>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                    {enterprises.map(enterprise => (
                        <CardEnterprise key={enterprise.id} enterprise={enterprise} />
                    ))}
                </div>
            </Container>
        </div>
    )
}
