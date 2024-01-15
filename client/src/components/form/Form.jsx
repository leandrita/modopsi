import React from 'react'
import './Form.css'
import Button from '../../components/button/Button'


const Form = () => {
    return (
        <div className='contact-form-box'>
            <form className='contact-form'>
                <div className='input-group'>
                    <label htmlFor='name' className='label-title'>Nombre</label>
                    <input type='text' name='name' className=''></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='email' className='label-title'>Email</label>
                    <input type='email' name='email' className=''></input>
                </div>
                <div className='input-group'>
                    <label htmlFor='msg' className='label-title'>Mensaje</label>
                    <textarea type='text' name='msg' className='' />
                </div>
                <Button bgColorClass='send-button-bgc' text='Enviar' widthClass='send-button-width' fsClass='send-button-fs' hoverClass='send-button-hover' />
            </form>
        </div>

    )
}

export default Form