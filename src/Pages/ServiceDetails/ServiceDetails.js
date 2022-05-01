import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(() =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    },[])

    return (
        <div>
            <h1 className='text-center'>You are about to book:{service.name}</h1>
            <div className='text-center' >
                <Link to='/checkout' ><button className='text-warning fs-5 fw-4' >Checkout proceed</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;