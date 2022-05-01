import React from 'react';
import useService from '../../Hooks/useService';

const ManageServices = () => {
    const [services, setServices] = useService();
    const handleDelete = id =>{
        const procced = window.confirm('are you sure');
        if(procced){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = services.filter(service => service._id !== id)
                setServices(remaining);
            })
        }
    }
    return (
        <div className='vh-100' >
            <h1 className='text-center' >hello form management</h1>
            {
                services.map(service => <div className= 'container w-75 mx-auto'  key={service._id} > 
                <li>{service.name} 
                <button onClick={() =>handleDelete(service._id)} > X </button></li>
                    </div>)
            }
        </div>
    );
};

export default ManageServices;