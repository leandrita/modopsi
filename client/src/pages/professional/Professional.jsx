import React, { useEffect, useState } from 'react'
import './Professional.css'
import Header from '../../components/header/Header'
// import Perfil2 from '../../assets/Perfil2.svg'
import Button from '../../components/button/Button'
import { Link, useParams } from 'react-router-dom'
import { getProfessionalById } from '../../services/ApiServices'

const Professional = () => {
    const [professional, setProfessional] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const professionalData = await getProfessionalById(id);
                setProfessional(professionalData);
                // console.log(professionalData.image_url);
            } catch (error) {
                console.error('Error buscando el profesional:', error);
            }
        };

        fetchData();
    }, [id]);

    const { name, profile, area1, area2, area3 } = professional.profesional || {}
    // const { image } = professional.image_url || {}

    const renderProfile = profile && profile.split('\n').map((step, index) => (
        <li key={index} className="list-style-none">{step}</li>
    ));

    return (
        <div className='professional-bg'>
            <Header />
            <div className='hero-professional'>
                <img className='avatar' src={professional.image_url} alt='professional avatar' />
                <h2 className='professional-name'>{name}</h2>
                <div className='professional-description-box'>
                    <div className='profile-section'>
                        <h3 className='profile-title'>Perfil</h3>
                        <p className='profile-info'>{renderProfile}</p>
                    </div>
                    <div className='profile-section'>
                        <h3 className='profile-title'>Áreas de trabajo</h3>
                        <ul>
                            <li className='profile-info' >{area1}</li>
                            <li className='profile-info'>{area2}</li>
                            <li className='profile-info'>{area3}</li>
                        </ul>
                    </div>
                </div>
                <Link to={'/contact'}><Button bgColorClass='request-button-bgc' text='Solicita tu terapia ahora' widthClass='request-button-width' fsClass='request-button-fs' hoverClass='request-button-hover' /></Link>
            </div>
        </div>
    );
};

export default Professional;