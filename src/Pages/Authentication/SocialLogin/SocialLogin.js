import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        
       errorElement=<p className= ' text-center text-danger fs-5 fw-bold'>{error?.message}{error1?.message}</p>
        
      }
      
    if(user || user1){
        navigate('/home')
    }  
    return (
        <div>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className='w-25'><hr/></div>
                <p className='mx-4 my-2'>OR</p>
                <div className='w-25' ><hr/> </div>
            </div>
            <div>
                {errorElement}
                <button onClick={() =>signInWithGoogle()}
                 className='w-75 my-2 d-block mx-auto border border-3 rounded-pill p-2' > <img src={google} alt="" /> <span className=' mx-2 fw-bolder'>Google Login</span></button>
                <button 
                className='w-75 my-2 d-block mx-auto border border-3 rounded-pill p-2' > <img width={30} src={facebook} alt="" /> <span className=' mx-2 fw-bolder'>Facebook Login</span></button>
                <button onClick={() =>signInWithGithub()}
                className='w-75 my-2 d-block mx-auto border border-3 rounded-pill p-2' > <img src={github} alt="" /> <span className=' mx-2 fw-bolder'>GitHub Login</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;