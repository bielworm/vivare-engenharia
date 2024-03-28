'use client'
import react from 'react'
import Icon from '../Adapters/Icon'
import { Container } from '../Partials/Container'

// @react-client
export default function SectionContactHome() {

    const [formData, setFormData] = react.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
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
        <div id='contato' className='py-12 bg-[#F7F7F7]'>
            <a className='flex flex-row justify-center gap-3 items-center pb-12 hover:opacity-80 transition-all duration-200' href="https://www.instagram.com/vivareengenharia/" rel='noreferrer' target='_blank'>
                <h2 className='text-4xl font-bold text-[#99161d]'>Siga-nos no Instagram</h2>
                <Icon icon="mdi:instagram" width="48" height="48" />
            </a>
            <div className="bg-[url('/img/bg-contact.webp')] bg-cover flex justify-center items-center">
                <Container>
                    <div className='grid lg:grid-cols-2 lg:gap-24 py-8'>
                        <div className='rounded-xl overflow-hidden h-[528px]'>
                            <div className='w-full bg-[#99161d] py-2 font-bold text-center text-white'>ENVIE SUA MENSAGEM</div>
                            <div className='bg-white p-8'>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-4'>
                                        <label htmlFor='name' className='block text-lg font-bold text-[#99161d]'>Nome</label>
                                        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='email' className='block text-lg font-bold text-[#99161d]'>E-mail</label>
                                        <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='phone' className='block text-lg font-bold text-[#99161d]'>Telefone</label>
                                        <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChangePhone} required className='w-full border border-gray-300 rounded-md py-2 px-3' />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='message' className='block text-lg font-bold text-[#99161d]'>Mensagem</label>
                                        <textarea id='message' name='message' value={formData.message} onChange={handleChange} required className='w-full border border-gray-300 rounded-md py-2 px-3' rows={3}></textarea>
                                    </div>
                                    <button type='submit' className='bg-[#99161d] text-white font-bold py-2 px-4 rounded-md hover:bg-[#7f0f13] transition-all duration-200'>Enviar</button>
                                </form>
                            </div>
                        </div>
                        <div className='rounded-xl overflow-hidden h-[528px]'>
                            <div className='w-full bg-[#99161d] py-2 font-bold text-center text-white'>OUTRAS FORMAS DE CONTATO</div>
                            <div className='bg-white p-8'>
                                <div className='mb-4'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <Icon icon="entypo:phone" width="20" height="20" />
                                        <h3 className='block text-lg font-bold text-[#99161d]'>Telefone</h3>
                                    </div>
                                    <a href="tel:09132310203" rel='noreferrer' target='_blank'>
                                        <p>(91) 32310-0203</p>
                                    </a>
                                </div>
                                <div className='mb-4'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <Icon icon="entypo:mail" width="20" height="20" />
                                        <h3 className='block text-lg font-bold text-[#99161d]'>E-mail</h3>
                                    </div>
                                    <a href="mailto:contato@vivareengenharia.com.br" rel='noreferrer' target='_blank'>
                                        <p>contato@vivareengenharia.com.br</p>
                                    </a>
                                </div>
                                <div className='mb-4'>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <Icon icon="icon-park-solid:local-two" width="20" height="20" />
                                        <h3 className='block text-lg font-bold text-[#99161d]'>Localização</h3>
                                    </div>
                                    <p>Av. Augusto Montenegro, 4300
                                        Ed Parque Office, sala 1011
                                        Parque Verde - Belém - Pará
                                        CEP: 66635-110</p>
                                </div>
                            </div>
                            <a rel="noreferrer" target='_blank' href="https://www.google.com/maps/place/Vivare+Engenharia+-+Construtora+e+Incorporadora/@-1.3709374,-48.4473422,15z/data=!4m6!3m5!1s0x92a461b1112c7003:0xa17ea71832803312!8m2!3d-1.3709374!4d-48.4473422!16s%2Fg%2F11jclmwdwp?entry=ttu">
                                <div className="bg-[url('/img/place-map.png')] w-full bg-cover bg-center h-full">
                                    <h3 className='text-white font-bold text-center py-24 text-2xl'>Abrir no mapa</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
