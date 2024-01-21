import React, { useState } from 'react'
import './Form.css'
import Button from '../../components/button/Button'
import emailjs from 'emailjs-com'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
    });

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_lot5oee', 'template_r4ojosr', e.target, '1ojRPiNwIewvjApj8')
            .then(res => {
                alert("Su mensaje se ha enviado correctamente!");

                setFormData({
                    name: '',
                    email: '',
                    msg: '',
                });
            });
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className='contact-form-box'>
            <form className='contact-form' onSubmit={sendEmail}>
                <div className='input-group'>
                    <label htmlFor='name' className='label-title'>Nombre</label>
                    <input type='text' id='name' name='name' className='' value={formData.name}
                        onChange={handleInputChange}></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='email' className='label-title'>Email</label>
                    <input type='email' id='email' name='email' className='' value={formData.email}
                        onChange={handleInputChange}></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='msg' className='label-title'>Mensaje</label>
                    <textarea type='text' id='msg' name='msg' className='' value={formData.msg}
                        onChange={handleInputChange} />
                </div>
                <Button bgColorClass='send-button-bgc' text='Enviar' widthClass='send-button-width' fsClass='send-button-fs' hoverClass='send-button-hover' />
            </form>
        </div>

    )
}

export default Form