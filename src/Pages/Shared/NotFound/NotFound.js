import React from 'react';
import sleeping from '../../../images/sleeping.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-danger text-center' >Mehcanic is sleeping</h2>
            <img className='w-75' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;