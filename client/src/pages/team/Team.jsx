import React from 'react'
import './Team.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'

const Team = () => {
    const currentPage = 'team';

    return (
        <div className='team-bg'>
            <Header />
            <div className='hero-team'>
                <div className='team-title-cont'>
                    <h1 className='team-title'>Nuestro equipo</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                <div className='team-boxes-container'>
                    <Card currentPage={currentPage} />
                    <Card currentPage={currentPage} />
                    <Card currentPage={currentPage} />
                </div>
                <Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' />
            </div>
        </div>
    )
}

export default Team