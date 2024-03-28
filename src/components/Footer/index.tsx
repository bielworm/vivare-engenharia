'use client'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { navLinks } from '../Header/NavLinks'
import { Container } from '../Partials/Container'
import { Copyright } from './Copyright'
import Icon from '../Adapters/Icon'
import { Icon as Iconify } from '@iconify/react'

export default function Footer() {
  return (
    <footer className="bg-[#54595F] border-t pt-5">
      <Container>
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-16 lg:gap-20 flex-wrap px-24 py-8">
          <div>
            <div className='group flex flex-row gap-1 items-center'>
              <Iconify
                icon={'icon-park-solid:local-two'}
                className='text-white group-hover:text-[#99161d] transition-all duration-300'
                width={20} height={20}
              />
              <strong className='text-white group-hover:text-[#99161d]'>LOCALIZAÇÃO</strong>
            </div>
            <p className="mt-2 text-white text-sm">
              Rod Augusto Montenegro, 4300.
              Ed Parque Office. Sala 1011
              CEP 66635-110
              Parque Verde - Belém - PA
            </p>
          </div>

          <div>
            <div className='group flex flex-row gap-1 items-center'>
              <Iconify
                icon={'lucide:at-sign'}
                className='text-white group-hover:text-[#99161d] transition-all duration-300'
                width={20} height={20}
              />
              <strong className='text-white group-hover:text-[#99161d]'>SIGA-NOS</strong>
            </div>
            <div className='flex flex-row gap-3 mt-2'>
              <a href="https://web.facebook.com/vivare.engenharia/" rel='noreferrer' target='_blank'>
                <div className='group border border-white hover:border-[#99161D] transition-all duration-300 rounded-md flex justify-center items-center h-12 w-12'>
                  <Iconify
                    icon={'ic:baseline-facebook'}
                    className='text-white group-hover:text-[#99161d] transition-all duration-300'
                    width={24} height={24}
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/vivareengenharia/" rel='noreferrer' target='_blank'>
                <div className='group border border-white hover:border-[#99161D] transition-all duration-300 rounded-md flex justify-center items-center h-12 w-12'>
                  <Iconify
                    icon={'mdi:instagram'}
                    className='text-white group-hover:text-[#99161d] transition-all duration-300'
                    width={24} height={24}
                  />
                </div>
              </a>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='group flex flex-row gap-1 items-center'>
              <Iconify
                icon={'fa-solid:link'}
                className='text-white group-hover:text-[#99161d] transition-all duration-300'
                width={20} height={20}
              />
              <strong className='text-white group-hover:text-[#99161d]'>LINKS ÚTEIS</strong>
            </div>
            <a href="http://www.sindusconpa.org.br/" className='text-white hover:text-[#99161d] transition-all duration-300' rel="noreferrer" target='_blank'>
              <p className="mt-2 text-sm">Sinduscon Pará</p>
            </a>

            <a href="http://www.letsbrain.com.br/" className='text-white hover:text-[#99161d] transition-all duration-300' rel="noreferrer" target='_blank'>
              <p className="mt-2 text-sm">Brain Inteligência Estratégica</p>
            </a>

            <a href="http://cbic.org.br/" className='text-white hover:text-[#99161d] transition-all duration-300' rel="noreferrer" target='_blank'>
              <p className="mt-2 text-sm">CBIC - Câmara Brasileira da Indústria da Construção</p>
            </a>
          </div>

          <div className='flex flex-col justify-center'>
            <img src="/img/logo-white.png" className='h-32 lg:h-24 object-contain' />
          </div>

        </div>
      </Container>
      <Copyright />
    </footer>
  )
}
