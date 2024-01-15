import React from 'react'
import './Contact.css'
import Header from '../../components/header/Header'
import Form from '../../components/form/Form'

const Contact = () => {

    return (
        <div className='contact-bg'>
            <Header />
            <div className='hero-contact'>
                <div className='contact-title-cont'>
                    <h1 className='contact-title'>Contacto</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                <div className='contact-boxes-container'>
                    <div className='contact-info'>
                        <p className='text-info'>Envíanos un WhatsApp a: <spam>+54 1111 9999</spam></p>
                        <p className='text-info'>Llámanos a: <spam>+54 7777 9999</spam></p>
                        <p className='text-info'>Envíanos un mail a: <spam>modopsi.consulta@gmail.com</spam></p>
                        <p className='text-info'>O rellena nuestro formulario de contacto y nos comunicaremos a la mayor brevedad posible. </p>
                    </div>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact