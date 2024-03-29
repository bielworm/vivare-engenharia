'use client'
import { Container } from "@/components/Partials/Container";
import OtherEnterprises from "@/components/Partials/OtherEnterprises";
import { Icon as Iconify } from '@iconify/react'

export default function Page() {


    return (
        <div>
            <div className="relative">
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b to-black from-transparent z-20">
                    <Container>
                        <div className="py-6 flex flex-row justify-between">
                            <strong className="text-white text-2xl font-bold">Rio de Janeiro</strong>
                            <p className="text-white">Venda</p>
                        </div>
                    </Container>
                </div>
                <img src="/img/enterprises/vivare-garden/bg-hero.jpg" className="relative w-screen object-contain z-10" />
            </div>
            <div className="mb-8">
                <Container>

                    <div className="mt-8 flex flex-row gap-6 items-center">
                        <div className="text-sm text-center">
                            Quartos
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <Iconify
                                    icon={'material-symbols:bed'}
                                    className='text-[#1ea69a]'
                                    width={32} height={32}
                                />
                                2
                            </div>
                        </div>
                        <div className="text-sm text-center">
                            Banheiros
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <Iconify
                                    icon={'icon-park-solid:shower-head'}
                                    className='text-[#1ea69a]'
                                    width={32} height={32}
                                />
                                1
                            </div>
                        </div>

                        <div className="text-sm text-center">
                            Garagem
                            <div className="flex flex-row gap-2 justify-center items-center">
                                <Iconify
                                    icon={'game-icons:home-garage'}
                                    className='text-[#1ea69a]'
                                    width={32} height={32}
                                />
                                1
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-[#1ea69a] py-8 pb-2 font-bold">Descrição</p>
                        <p className="mt-4 text-[#808090] text-base font-bold">Garanta já sua unidade no Vivare Garden Residencial: condomínio exclusivo, um estilo único de morar.</p>

                        <p className="mt-4 text-[#808090] text-base">Este projeto conta com 40 casas e uma área de lazer completa, guarita com wc, administração, lixeira, caixa d’água com capacidade para 20.000 litros, espaço multiuso com wc PNE masculino, wc PNE feminino, depósito, churrasqueira, piscina com deck, parque infantil, área técnica, calçadas e rua principal. As casas possuem 45,02 m² de área privativa; 02 quartos, 01 vaga de garagem, pátio, sala de estar/jantar, banheiro, cozinha, lavanderia e quintal.</p>
                    </div>

                    <div>
                        <p className="text-[#1ea69a] py-8 pb-2 font-bold">Ficha Técnica:</p>
                        <p className="mt-4 text-[#808090] text-base">Empreendimento: Vivare Garden Residencial</p>
                        <p className="mt-4 text-[#808090] text-base">Endereço: Estrada da Pedreirinha, nº 86</p>
                        <p className="mt-4 text-[#808090] text-base">Bairro: Guanabara</p>
                        <p className="mt-4 text-[#808090] text-base">Cidade: Belém-PA</p>
                        <p className="mt-4 text-[#808090] text-base">Incorporação: Vivare Engenharia</p>
                        <p className="mt-4 text-[#808090] text-base">Construção: Viqua Engenharia</p>
                    </div>

                    <div>
                        <p className="text-[#1ea69a] py-8 pb-2 font-bold">Informações Gerais do Empreendimento:</p>
                        <p className="mt-4 text-[#808090] text-base">Data de Lançamento: Novembro/2020</p>
                        <p className="mt-4 text-[#808090] text-base">Início das obras: Janeiro/2021</p>
                        <p className="mt-4 text-[#808090] text-base">Entrega do Empreendimento: Previsto Fevereiro/2024</p>
                        <p className="mt-4 text-[#808090] text-base">Área do terreno: 3.366,29 m²</p>
                        <p className="mt-4 text-[#808090] text-base">N° de casas: 40 casas</p>
                        <p className="mt-4 text-[#808090] text-base">N° de Pavimento: 1 pavimento</p>
                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <p className="text-[#1ea69a] pt-8 pb-2 font-bold">Localização:</p>
                    <p className="text-[#808080]">
                        O Vivare Garden Residencial está localizado em Belém, capital do Pará, na estrada da Pedreirinha, nº 86, entre a rodovia BR-316 e avenida Papa João Paulo II.
                    </p>
                </Container>
            </div>

            <OtherEnterprises enterpriseSlug="rio-de-janeiro" />
        </div>
    );
}
