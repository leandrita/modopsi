import React from 'react'
import './Terapies.css'
import Header from '../../components/header/Header'
// import Card from '../../components/card/Card'
import Button from '../../components/button/Button'

const Terapies = () => {

    return (
        <div className='terapies-bg'>
            <Header />
            <div className='hero-terapies'>
                <div className='terapies-title-cont'>
                    <h1 className='terapies-title'>Nuestras terapias</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                {/* <Card /> */}
                <Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' />
            </div>
        </div>
    )
}

export default Terapies