'use client'
import { Container } from "@/components/Partials/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/core';
import OtherEnterprises from "@/components/Partials/OtherEnterprises";

export default function Page() {

    const swiperImages = [
        {
            id: 1,
            img: '/img/enterprises/rio-de-janeiro/2.jpg'
        },
        {
            id: 2,
            img: '/img/enterprises/rio-de-janeiro/3.jpg'
        },
        {
            id: 3,
            img: '/img/enterprises/rio-de-janeiro/4.jpg'
        },
        {
            id: 4,
            img: '/img/enterprises/rio-de-janeiro/5.jpg'
        },
        {
            id: 5,
            img: '/img/enterprises/rio-de-janeiro/6.jpg'
        },
        {
            id: 6,
            img: '/img/enterprises/rio-de-janeiro/7.jpg'
        },
        {
            id: 7,
            img: '/img/enterprises/rio-de-janeiro/8.jpg'
        },
        {
            id: 8,
            img: '/img/enterprises/rio-de-janeiro/10.png'
        },
        {
            id: 9,
            img: '/img/enterprises/rio-de-janeiro/11.png'
        },
        {
            id: 10,
            img: '/img/enterprises/rio-de-janeiro/12.jpg'
        },
    ]

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
                <img src="/img/enterprises/rio-de-janeiro/bg-hero.jpg" className="relative w-screen object-contain z-10" />
            </div>
            <div className="mb-8">
                <Container>
                    <p className="text-[#1ea69a] py-8 pb-2 font-bold">Descrição</p>
                    <div>
                        <p className="mt-4 text-[#808090] text-base">03 Blocos</p>
                        <p className="mt-4 text-[#808090] text-base">90 apartamentos</p>
                        <p className="mt-4 text-[#808090] text-base">02 quartos, 01 banheiro reversível, sala de estar/jantar, cozinha, quintal, jardim, garagem, guarita de segurança, Energia solar nas áreas comuns,área de lazer com piscina, salão de festas, churrasqueira, playground.</p>
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
                        O Residencial Rio de janeiro está localizado em Belém, capital do Pará, na Alameda Copacabana, nº 35.
                    </p>
                </Container>
            </div>

            <OtherEnterprises enterpriseSlug="rio-de-janeiro" />
        </div>
    );
}
