import React from 'react'
import { Container } from '../Partials/Container'

export default function SectionAboutUsHome() {
    return (
        <div id='sobre-nos'>
            <img src="/img/banner-vivare.png" className='w-full object-contain' />
            <div className="bg-[url('/img/bg-about-us.jpg')] bg-cover bg-center">
                <div className='flex-1 bg-[#002F14] bg-opacity-80 py-24'>
                    <Container>
                        <div className='grid xl:grid-cols-2 md:gap-12'>
                            <div className='text-white p-16 pb-2 md:p-0'>
                                <h2 className='font-bold text-3xl'>Vivare Engenharia</h2>
                                <p className='mt-3'>A VIVARE Engenharia oferece produtos que se destacam pela qualidade, criatividade e funcionalidade de seus projetos.</p>
                                <p className='mt-3'>A cada ano, nossos clientes são surpreendidos com novidades nos nossos empreendimentos, pois, incentivamos a adoção de soluções urbanísticas e arquitetônicas de qualidade, assim como o uso racional dos recursos naturais na produção das unidades, com essa preocupação fomos a primeira incorporadora na região norte a implantar energia solar nos nossos empreendimento.</p>
                                <p className='mt-3'>O desafio da VIVARE Engenharia é renovar-se a cada dia, adaptando-se às necessidades de seus clientes e buscando a excelência em cada novo projeto.</p>
                            </div>
                            <div className='grid md:grid-cols-3 gap-4 p-16 md:p-0'>
                                <div className='h-64 xl:h-80 p-3 flex justify-center bg-white text-[#07047E] rounded-tl-lg rounded-br-lg border-b-4 border-[#EEDC02]'>
                                    <div>
                                        <h3 className='font-bold text-2xl'>Missão</h3>
                                        <p className='mt-1 text-base md:text-sm'>Proporcionar o sonho da casa própria, oferecendo imóveis com a melhor relação custo benefício para o cliente, empregando conceitos e práticas que respeitem os valores da sociedade e do meio ambiente.</p>
                                    </div>
                                </div>
                                <div className='h-64 xl:h-80 p-3 flex justify-center bg-white text-[#07047E] rounded-tl-lg rounded-br-lg border-b-4 border-[#EEDC02]'>
                                    <div>
                                        <h3 className='font-bold text-2xl'>Visão</h3>
                                        <p className='mt-1 text-base md:text-sm'>Ser referência na incorporação e construção de empreendimentos imobiliários na linha econômica e ambiental da Região Norte.</p>
                                    </div>
                                </div>
                                <div className='h-64 xl:h-80 p-3 flex justify-center bg-white text-[#07047E] rounded-tl-lg rounded-br-lg border-b-4 border-[#EEDC02]'>
                                    <div className='w-full'>
                                        <h3 className='font-bold text-2xl'>Valores</h3>
                                        <p className='mt-1 text-base md:text-sm'>- Atitude, Ética e Transparência;</p>
                                        <p className='text-base md:text-sm'>- Valorização das Pessoas;</p>
                                        <p className='text-base md:text-sm'>- Desenvolvimento e Aperfeiçoamento de Processos;</p>
                                        <p className='text-base md:text-sm'>- Sustentabilidade Organizacional;</p>
                                        <p className='text-base md:text-sm'>- Respeito ao Meio Ambiente;</p>
                                        <p className='text-base md:text-sm'>- Foco em Resultados.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}
