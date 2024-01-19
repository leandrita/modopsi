import React, { useEffect, useState } from 'react'
import './Therapies.css'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom'
import { getAllTherapies } from '../../services/ApiServices'

const Therapies = () => {
    const [therapies, setTherapies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const therapiesData = await getAllTherapies();
                setTherapies(therapiesData);
            } catch (error) {
                console.error('Error al obtener las terapias:', error);
            };
        };

        fetchData();
    }, []);

    return (
        <div className='therapies-bg'>
            <Header />
            <div className='hero-therapies'>
                <div className='therapies-title-cont'>
                    <h1 className='therapies-title'>Nuestras terapias</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                <div className='therapy-boxes-container'>
                    {therapies.map((therapy) => (
                        <Card key={therapy.id} therapy={therapy} />
                    ))}
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    )
}

export default Therapies