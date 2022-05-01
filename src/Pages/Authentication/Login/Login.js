import React,{useRef} from 'react';
import { Button, Form, Toast } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef =  useRef('');
    const passwordRef = useRef('');
    const navigate  = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth)
       
    let errorElement;
    if (error ) {
        
        errorElement=   <div>
             <p className= ' text-center text-danger fs-5 fw-bold'>{error?.message}</p>
           </div>
        
       }
    if(user){
        navigate(from,{ replace: true});
    }

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        signInWithEmailAndPassword(email,password);
    }
    const navigateRegister = event =>{
        navigate('/register')
    }
    const handleResetPassword = async () =>{
        const email = emailRef.current.value;
       if(!email){
            alert('please enter email')
       } 
       else{
        await sendPasswordResetEmail(email);
        toast('sent email')
       }
    }
    return (
        <div className='my-5'>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto border border-3 rounded-3 p-5'>
                <h1 className='text-primary text-center'  >Please login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                
                <Button className='d-block mx-auto w-50 fs-5 ' variant="primary" type="submit">
                    Login
                </Button>
                <p className='text-center my-4 fw-bolder'>New to Genius Car? <Link to='/register' className='text-warning pe-auto text-decoration-none' onClick={navigateRegister} >Create an account</Link></p>
                <p className='text-center my-4 fw-bolder'><Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={handleResetPassword} >Reset Password</Link></p>
                {errorElement}
                <SocialLogin></SocialLogin>
                <ToastContainer/>
              
            </Form>
        </div>
    );
};

export default Login;