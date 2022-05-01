import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import  './Register.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';



const Register = () => {
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigate = useNavigate();

    const navigateLogin = (event) =>{
        navigate('/login')
    }
    if(user){
        console.log(user);
    }
    const handleRegister =async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        
        await createUserWithEmailAndPassword(email,password)
        await updateProfile({displayName:name});
        navigate('/home'); 
        alert('updated profile');
    }

    return (
        <div className='register-form' >
            <h2>Please Register</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                <input type="email" name="Email" id="email" placeholder='Enter your Email' />
                <input type="password" name="password" id="password" placeholder='Enter your password' />
                <input onClick={() =>setAgree(!agree)} className='p-2 cheackbox' type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary':"ps-2 text-danger"} htmlFor="terms">Accept Car server terms and codition </label> */}
                <label className={`ps-2  ${!agree ? '':'text-danger'}`} htmlFor="terms">Accept Car server terms and codition </label>
                <input 
                disabled={!agree}
                className='w-50 mx-auto mt-3 rounded-3 btn btn-warning' 
                type="submit"
                value="Register" />

            </form>
            <p className='text-center fw-bolder'>Already have an account? <Link to='/login' className='text-warning pe-auto text-decoration-none' onClick={navigateLogin} >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;