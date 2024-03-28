'use client'
import React from 'react'
import useMenuHamburguerStore from '../../stores/useMenuHamburguerStore'
import { navLinks } from '../Header/NavLinks'
import { Icon } from '@iconify/react'
import { LanguageToggle } from './LanguageToggle'
import { useRouter } from 'next/navigation'

export function MenuHamburguer() {
  const { setShowMenuHamburguer, showMenuHamburguer } = useMenuHamburguerStore()

  const router = useRouter() // router.push('/')

  function handleRouting(routeName: string) {
    router.push(routeName)
    setShowMenuHamburguer(false)
  }

  return (
    <div
      className={`fixed w-[90%] md:hidden h-full bg-[url(/img/background.png)] bg-cover bg-center bg-fixed top-0 flex items-center justify-center shadow-2xl z-[999999] bg-white/80 backdrop-blur-md ${showMenuHamburguer ? 'right-0' : '-right-[700px]'
        } transition-all overflow-y-auto`}
    >
      <div className="w-full h-full relative">
        <Icon
          icon="mdi:close"
          className="text-3xl absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowMenuHamburguer(false)}
        />
        <div className="py-20">
          <div className="flex justify-center py-4 px-10">
            <img src="/img/logo.png" alt="bredi" />
          </div>
          {navLinks.map((link) => (
            link.subroutes ? (
              link.subroutes.map((sublink) => (
                <div
                  key={sublink.label}
                  className="text-xl cursor-pointer text-zinc-900 bg-white p-5 border-b border-brand-yellow"
                  onClick={() => handleRouting(sublink.route)}
                >
                  Empreendimento - {sublink.label}
                </div>
              ))
            ) : (
              <div
                key={link.name}
                className="text-xl cursor-pointer text-zinc-900 bg-white p-5 border-b border-brand-yellow"
                onClick={() => handleRouting(link.route)}
              >
                {link.name}
              </div>
            )
          ))}
          <div className="bg-white py-10">
            <p className="text-zinc-900 text-center text-xl">
              contato@vivareengenharia.com.br
            </p>
            <p className="text-zinc-900 text-center text-xl flex justify-center items-center mt-1">
              (91) 32310-0203
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
