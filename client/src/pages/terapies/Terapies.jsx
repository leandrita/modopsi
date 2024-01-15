import React from 'react'
import './Terapies.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'

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
                <div className='terapy-boxes-container'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    )
}

export default Terapies