'use client'
import { Container } from "@/components/Partials/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/core';
import OtherEnterprises from "@/components/Partials/OtherEnterprises";

export default function Page() {

    const swiperImages = [
        {
            id: 1,
            img: '/img/enterprises/jardins-de-vivara/08-1024x724.jpg'
        },
        {
            id: 2,
            img: '/img/enterprises/jardins-de-vivara/05-1024x724.jpg'
        },
        {
            id: 3,
            img: '/img/enterprises/jardins-de-vivara/15-1024x724.jpg'
        },
        {
            id: 4,
            img: '/img/enterprises/jardins-de-vivara/04-1024x724.jpg'
        },
        {
            id: 5,
            img: '/img/enterprises/jardins-de-vivara/03-1024x724.jpg'
        },
        {
            id: 6,
            img: '/img/enterprises/jardins-de-vivara/13-1024x724.jpg'
        },
        {
            id: 7,
            img: '/img/enterprises/jardins-de-vivara/14-1024x724.jpg'
        },
        {
            id: 8,
            img: '/img/enterprises/jardins-de-vivara/06-1024x724.jpg'
        },
    ]

    return (
        <div>
            <div className="relative">
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b to-black from-transparent z-20">
                    <Container>
                        <div className="py-6 flex flex-row justify-between">
                            <strong className="text-white text-2xl font-bold">Jardins de Vivara</strong>
                            <p className="text-white">Venda</p>
                        </div>
                    </Container>
                </div>
                <img src="/img/enterprises/jardins-de-vivara/bg-hero.jpg" className="relative w-screen object-contain z-10" />
            </div>
            <div>
                <Container>
                    <p className="text-[#1ea69a] pt-8 pb-2 font-bold">Descrição</p>
                    <div className="grid lg:grid-cols-2 items-center gap-8">
                        <div>
                            <strong className="text-[#808090] text-base">Garanta já sua unidade no Jardins de Vivara Residencial: condomínio exclusivo, um estilo único de morar.</strong>

                            <p className="mt-4 text-[#808090] text-base">Este projeto conta com 28 casas e uma área de lazer completa que encanta adultos e crianças.</p>
                            <p className="mt-4 text-[#808090] text-base">As casas possuem 165 m² de área privativa; 03 suítes, closet, 02 vagas de garagem, sala de estar/jantar, lavabo, cozinha, lavanderia, quintal, sacada de 23 m² com um lindo jardim inspirado na Reserva Ambiental Ilha de Vivara na Itália.</p>
                            <p className="mt-4 text-[#808090] text-base">Todas as casas serão entregues com cobertura das garagens e pontos de split na sala e quartos. Venha conhecer e apaixonar-se por um estilo único de morar.</p>
                        </div>

                        <img src="/img/enterprises/jardins-de-vivara/implantacao.jpg" alt="" />
                    </div>
                    <div className="lg:w-1/2 mb-8">
                        <div className="grid lg:grid-cols-2 gap-8 mt-8">
                            <div>
                                <strong className="text-[#808090] text-sm">Informações Gerais do Empreendimento:</strong>

                                <p className="text-[#808090] text-sm mt-4">Data de Lançamento: Setembro/2020</p>
                                <p className="text-[#808090] text-sm mt-2">Início das obras: Outubro/2020</p>
                                <p className="text-[#808090] text-sm mt-2">Entrega do Empreendimento: 36 meses a partir da assinatura com a Caixa Econômica.</p>
                                <p className="text-[#808090] text-sm mt-2">Área do terreno:3.828 m2</p>
                                <p className="text-[#808090] text-sm mt-2">N° de casas: 28 casas</p>
                                <p className="text-[#808090] text-sm mt-2">N° de Pavimento: 2 pavimentos</p>
                            </div>

                            <div>
                                <strong className="text-[#808090] text-sm">Ficha Técnica:</strong>

                                <p className="text-[#808090] text-sm mt-4">Empreendimento: Jardins de Vivara Residencial</p>
                                <p className="text-[#808090] text-sm mt-2">Endereço: Av. Padre Bruno Sechi, nº 50 B</p>
                                <p className="text-[#808090] text-sm mt-2">Bairro: Tapanã</p>
                                <p className="text-[#808090] text-sm mt-2">Cidade: Belém-PA</p>
                                <p className="text-[#808090] text-sm mt-2">Incorporação: Vivare Engenharia</p>
                                <p className="text-[#808090] text-sm mt-2">Construção: Viqua Engenharia</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay
                        loop
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },

                        }}
                        navigation={true}
                    >
                        {swiperImages.map(image =>
                            <SwiperSlide key={image.id}>
                                <img src={image.img} className="h-[80vw] sm:h-[24vw] object-cover" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Container>
            </div>

            <div>
                <Container>
                    <p className="text-[#1ea69a] pt-8 pb-2 font-bold">Localização:</p>
                    <p className="text-[#808080]">
                        O Jardins de Vivara Residencial, localizado em Belém, capital do Pará, situa-se em uma avenida em expansão em um bairro em evolução:
                    </p>
                    <p className="text-[#808080] mt-2">
                        Av, Padre Bruno Sechi, antiga Estrada da Yamada.
                    </p>
                </Container>
            </div>

            <OtherEnterprises />
        </div>
    );
}
