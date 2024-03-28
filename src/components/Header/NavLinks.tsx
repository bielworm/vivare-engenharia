'use client'
import Link from 'next/link'
import { Icon as Iconify, IconProps } from '@iconify/react'
import { useSelectedLayoutSegment } from 'next/navigation'
import { DropdownHover } from './DropdownHover'

export const navLinks = [
  {
    route: '/',
    name: 'Início',
  },
  {
    name: 'Empreendimentos',
    subroutes: [
      {
        label: 'Rio de Janeiro',
        route: '/imovel/rio-de-janeiro'
      },
      {
        label: 'Jardins de Vivara',
        route: '/imovel/jardins-de-vivara'
      },
      {
        label: 'Reserva Bolonha',
        route: '/imovel/reserva-bolonha'
      },
      {
        label: 'Vivare Garden',
        route: '/imovel/vivare-garden'
      },
    ]
  },
  {
    route: '/#sobre-nos',
    name: 'A Vivare ',
  },
  {
    route: '/#contato',
    name: 'Contato',
  },
]

export default function NavLinks() {
  const segment = useSelectedLayoutSegment()

  return (
    <>
      {navLinks.map((link) => (
        link.subroutes ? (
          <DropdownHover key={link.name} title={link.name} links={link.subroutes} />
        ) : (
          <Link key={link.name} href={link.route}>
            <span className="text-[#545454] text-base hover:text-[#99161d] cursor-pointer">{link.name}</span>
          </Link>
        )
      ))}
      <a href="https://web.facebook.com/vivare.engenharia/" rel="noreferrer" target="_blank">
        <Iconify icon="mdi:facebook" width={24} height={24} className="text-[#99161D] hover:text-[#54595F] transition-all duration-300 hover:-translate-y-2" />
      </a>
      <a href="https://www.instagram.com/vivareengenharia/" rel="noreferrer" target="_blank">
        <Iconify icon="mdi:instagram" width={24} height={24} className="text-[#99161D] hover:text-[#54595F] transition-all duration-300 hover:-translate-y-2" />
      </a>
      <a href="https://www.linkedin.com/company/65671387/" rel="noreferrer" target="_blank">
        <Iconify icon="mdi:linkedin" width={24} height={24} className="text-[#99161D] hover:text-[#54595F] transition-all duration-300 hover:-translate-y-2" />
      </a>
    </>
  )
}
