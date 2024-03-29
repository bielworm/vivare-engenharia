'use client'
import { Container } from "@/components/Partials/Container";
import react from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from 'swiper/core';
import OtherEnterprises from "@/components/Partials/OtherEnterprises";
import { Icon as Iconify } from '@iconify/react'

export default function Page() {

    const swiperInterna = [
        {
            id: 1,
            img: '/img/enterprises/reserva-bolonha/piscina.jpg'
        },
        {
            id: 2,
            img: '/img/enterprises/reserva-bolonha/futebol.jpg'
        },
        {
            id: 3,
            img: '/img/enterprises/reserva-bolonha/churrasqueira.jpg'
        },
        {
            id: 4,
            img: '/img/enterprises/reserva-bolonha/pet.jpg'
        },
        {
            id: 5,
            img: '/img/enterprises/reserva-bolonha/salao.jpg'
        },
        {
            id: 6,
            img: '/img/enterprises/reserva-bolonha/salao_2.jpg'
        },
    ]

    const swiperImages = [
        {
            id: 1,
            img: '/img/enterprises/reserva-bolonha/1.jpg'
        },
        {
            id: 2,
            img: '/img/enterprises/reserva-bolonha/2.jpg'
        },
        {
            id: 3,
            img: '/img/enterprises/reserva-bolonha/3.jpg'
        },
        {
            id: 4,
            img: '/img/enterprises/reserva-bolonha/4.jpg'
        },
        {
            id: 5,
            img: '/img/enterprises/reserva-bolonha/5.jpg'
        },
        {
            id: 6,
            img: '/img/enterprises/reserva-bolonha/6.jpg'
        },
    ]

    const [formData, setFormData] = react.useState({
        name: '',
        email: '',
        phone: '',
        message: 'Me dê mais informações sobre o Reserva Bolonha!'
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleChangePhone = (e: any) => {
        const { value } = e.target;
        const maskedValue = value.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        setFormData(prevState => ({
            ...prevState,
            phone: maskedValue
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Verificar se todos os campos foram preenchidos
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.phone.trim() === '' || formData.message.trim() === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        try {
            // Enviar os dados para a API
            const response = await fetch('https://formspree.io/f/mkndqoko', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Formulário enviado com sucesso!');
            } else {
                console.log(response)
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <div className="relative">
                <div className="absolute bottom-0 w-full h-24 bg-gradient-to-b to-black from-transparent z-20">
                    <Container>
                        <div className="py-6 flex flex-row justify-between">
                            <strong className="text-white text-2xl font-bold">Reserva Bolonha</strong>
                            <p className="text-white">Venda</p>
                        </div>
                    </Container>
                </div>
                <img src="/img/enterprises/reserva-bolonha/bg-hero.png" className="relative w-screen object-contain z-10" />
            </div>


            <div className="mt-12 mb-8">
                <Container>
                    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
                        <div className="flex flex-row items-center gap-2 bg-[#004928] h-32 sm:h-20 rounded-lg p-4">
                            <Iconify
                                icon={'icon-park-solid:local-two'}
                                className='text-white'
                                width={64} height={64}
                            />
                            <p className="text-white text-center">Ótima localização com muitos serviços</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 bg-[#004928] h-32 sm:h-20 rounded-lg p-4">
                            <Iconify
                                icon={'mdi:smiley-excited-outline'}
                                className='text-white'
                                width={64} height={64}
                            />
                            <p className="text-white text-center">Condomínio fechado com vários itens de lazer</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 bg-[#004928] h-32 sm:h-20 rounded-lg p-4">
                            <Iconify
                                icon={'iconoir:money-square-solid'}
                                className='text-white'
                                width={64} height={64}
                            />
                            <p className="text-white text-center">Menor preço do mercado por m²</p>
                        </div>
                        <div className="flex flex-row items-center gap-2 bg-[#004928] h-32 sm:h-20 rounded-lg p-4">
                            <Iconify
                                icon={'jam:stamp-f'}
                                className='text-white'
                                width={64} height={64}
                            />
                            <p className="text-white text-center">Único com certificação <strong>Casa Azul +</strong> no pará</p>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="py-12 bg-[url('/img/bg-contact.webp')]">
                <Container>
                    <div className="text-[#004928] text-center">
                        <h2 className="text-4xl font-bold mb-3">Lazer completo!</h2>
                        <p>O Bolonha tem vários <strong>ambientes de lazer planejados</strong> para <strong>você, sua familia e amigos.</strong></p>
                        <p>Nem o seu <strong>pet</strong> vai ficar de fora da brincadeira.</p>
                    </div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        autoplay
                        loop
                        className="md:w-[50vw] rounded-sm mt-2"
                        slidesPerView={1}
                        navigation={true}
                    >
                        {swiperInterna.map(image =>
                            <SwiperSlide key={image.id}>
                                <img src={image.img} className="object-cover" />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="bg-[#A8CF3A] rounded-xl mx-auto md:w-[50vw] mt-8 grid gap-12 grid-cols-2 md:grid-cols-3 px-16 py-8">
                        <ul className="text-[#004928] text-lg list-disc">
                            <li>Piscina</li>
                            <li>Campo de futebol</li>
                            <li>Playground</li>
                        </ul>
                        <ul className="text-[#004928] text-lg list-disc">
                            <li>Espaço gourmet</li>
                            <li>Espaço Zen</li>
                            <li>Pet place</li>
                        </ul>
                        <ul className="text-[#004928] text-lg list-disc">
                            <li>Salão de festas</li>
                            <li>Salão de jogos</li>
                        </ul>
                    </div>
                </Container>
            </div>

            <div className="py-12 bg-[#004928]">
                <Container>
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-3 md:gap-16">

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            autoplay
                            loop
                            slidesPerView={1}
                            navigation={true}
                            className="w-[90vw] md:w-[32vw]"
                        >
                            {swiperImages.map(image =>
                                <SwiperSlide key={image.id}>
                                    <img src={image.img} className="object-cover" />
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <div className="text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6">O seu espaço</h2>

                            <div className="flex flex-row items-center gap-2 mt-2">
                                <Iconify
                                    icon={'material-symbols:check'}
                                    className='text-white'
                                    width={24} height={24}
                                />
                                <p>85m² de área privativa</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <Iconify
                                    icon={'material-symbols:check'}
                                    className='text-white'
                                    width={24} height={24}
                                />
                                <p>01 vaga de garagem</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 mt-2">
                                <Iconify
                                    icon={'material-symbols:check'}
                                    className='text-white'
                                    width={24} height={24}
                                />
                                <p>2 quartos sendo 1 suíte reversível</p>
                            </div>

                            <div className="p-6 mt-3 grid grid-cols-2 md:grid-cols-3">
                                <ul className="text-[#A8CF3A] text-lg list-disc">
                                    <li>Sala de Estar</li>
                                    <li>Lavanderia</li>
                                </ul>
                                <ul className="text-[#A8CF3A] text-lg list-disc">
                                    <li>Sala de Jantar</li>
                                    <li>Cozinha</li>
                                </ul>
                                <ul className="text-[#A8CF3A] text-lg list-disc">
                                    <li>Quintal</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* <div>
                <Container>
                    <p className="text-[#1ea69a] pt-8 pb-2 font-bold">Localização:</p>
                    <p className="text-[#808080]">
                        O Residencial Rio de janeiro está localizado em Belém, capital do Pará, na Alameda Copacabana, nº 35.
                    </p>
                </Container>
            </div> */}

            <div className="py-12">
                <Container>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="">
                            <h2 className="text-[#004928] text-4xl font-bold">Sua casa com algo a mais</h2>
                            <p className="mt-8">A <strong>qualidade de vida</strong> que você procura <strong>está no Reserva Bolonha.</strong> Muito mais um condomínio fechado, o Reserva Bolonha reúne <strong>bem estar</strong> e qualidade de vida com <strong>conforto e segurança.</strong></p>
                            <p className="mt-8">Reconhecido com o <strong>Selo Casa Azul +  Caixa nível Safira</strong> pela <strong>Caixa Econômica Federal</strong>, o Reserva Bolonha pela sustentabilidade que trabalhava no empreendimento.</p>
                        </div>
                        <form className="bg-[#004928] rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-center text-white mb-4">Entre em contato e receba todas as informações do Empreendimento</h3>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <label htmlFor='name' className='block text-lg font-bold text-white'>Nome</label>
                                    <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='email' className='block text-lg font-bold text-white'>E-mail</label>
                                    <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='phone' className='block text-lg font-bold text-white'>Telefone</label>
                                    <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChangePhone} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                </div>
                                <button type='submit' className='bg-[#A8CF3A] w-full text-[#004928] font-bold py-2 px-4 rounded-md hover:bg-white hover:text-[#004928] transition-all duration-200'>Enviar</button>
                            </form>
                        </form>
                    </div>
                </Container>
            </div>

            <div className="py-12 bg-[#F7F7F7]">
                <Container>
                    <div className="grid justify-center items-center gap-16 xl:grid-cols-2">
                        <a href="https://www.google.com/maps/place/Reserva+Bolonha+Residencial+-+Venda+de+Casas+-+Bel%C3%A9m+-+Ananindeua+PA/@-1.4030457,-48.4085645,16z/data=!4m6!3m5!1s0x92a48b1ec36ddb21:0x25601437abb6aaf9!8m2!3d-1.4021984!4d-48.4046807!16s%2Fg%2F11k8pkg0fv?entry=ttu" rel="noreferrer" target="_blank">
                            <img src="/img/enterprises/reserva-bolonha/bolonha-map.png" className="w-full h-80 object-cover hover:opacity-80 transition-all duration-300" />
                        </a>
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-[#004928] text-3xl"><strong>Perto</strong> do que <strong>você precisa</strong></h3>
                            <div className="mt-8 grid gap-12 md:grid-cols-2">
                                <ul className="text-[#004928] text-lg list-disc decoration-[#A8CF3A]">
                                    <li>Facil acesso a João Paulo II</li>
                                    <li>Hospital Unimed</li>
                                    <li>Faculdade Unama</li>
                                </ul>
                                <ul className="text-[#004928] text-lg list-disc decoration-[#A8CF3A]">
                                    <li>Parque do Utinga</li>
                                    <li>Próx. a supermercados</li>
                                    <li>Shopping Metrópolo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <OtherEnterprises enterpriseSlug="reserva-bolonha" />
        </div>
    );
}
