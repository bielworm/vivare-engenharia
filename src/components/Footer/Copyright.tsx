/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Container } from '../Partials/Container'

export function Copyright() {
  return (
    <div className="py-4 mt-10 bg-[#43464c]">
      <Container>
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row">
          <p className="text-white text-sm m-0">
            Vivare Engenharia {new Date().getFullYear()} © Todos os direitos
            reservados
          </p>
          <div className="flex items-center">
            <p className="text-white flex items-center text-sm m-0">
              <a
                href="https://www.bredi.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                {/* Desenvolvido por */}
                {/* <img
                  src="/bredi.png"
                  alt="bredi tecnologia"
                  width={18}
                  className="inline-block"
                /> */}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
