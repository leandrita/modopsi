import React, { useEffect, useState } from 'react'
import './Team.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import { getAllProfessionals } from '../../services/ApiServices'

const Team = () => {
    const currentPage = 'team';

    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const professionalsData = await getAllProfessionals();
                setProfessionals(professionalsData);
            } catch (error) {
                console.error('Error al obtener los profesionales:', error);
            };
        };

        fetchData();
    }, []);

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
                    {professionals.map((professional) => (
                        <Card currentPage={currentPage} key={professional.id} professional={professional} />
                    ))}
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    )
}

export default Team