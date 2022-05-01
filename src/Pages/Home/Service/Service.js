import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name,img,description,price} =service;
    const navigate = useNavigate();
    const navigateToServiceDetails= id =>{
            // navigate('/service/'+id)
            navigate(`/service/${id}`)
    }

    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetails(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;