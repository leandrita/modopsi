import React, { useEffect, useState } from 'react'
import './Therapy.css'
import Header from '../../components/header/Header'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import { getTherapyById } from '../../services/ApiServices'

const Therapy = () => {
    const [therapy, setTherapy] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const therapyData = await getTherapyById(id);
                setTherapy(therapyData);
                // console.log(therapyData);
            } catch (error) {
                console.error('Error buscando la terapia:', error);
            }
        };

        fetchData();
    }, [id]);

    const { title, description, opportunity1, opportunity2, opportunity3 } = therapy.terapia || {}

    const renderDescription = description && description.split('\n').map((step, index) => (
        <li key={index} className="list-style-none">{step}</li>
    ));

    return (
        <div className='therapy-bg'>
            <Header />
            <div className='hero-therapy'>
                <div className='adult-therapy-title-cont'>
                    <h1 className='adult-therapy-title'>{title}</h1>
                    <p className='underline-sup'></p>
                    <p className='underline-inf'></p>
                </div>
                <div className='content'>
                    <div className='therapy-description-box'>
                        <p className='therapy-info'>{renderDescription}</p>
                    </div>
                    <div className='therapy-opportunity-box'>
                        <h2 className='opportunity-title'>Cada sesión es una oportunidad para:</h2>
                        <div className='opportunity-box'>
                            <p className='opportunity-text'>{opportunity1}</p>
                        </div>
                        <div className='opportunity-box'>
                            <p className='opportunity-text'>{opportunity2}</p>
                        </div>
                        <div className='opportunity-box'>
                            <p className='opportunity-text'>{opportunity3}</p>
                        </div>
                    </div>
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    );
};

export default Therapy;