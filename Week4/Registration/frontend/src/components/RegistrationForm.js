import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then((result) => {
                console.log(result);
                setName('');
                setEmail('');
                setPassword('');
                alert('Successfully registered');
            })
            .catch((err) => {
                alert(err.response.data);
                if (err.response.data === 'Email already exists') {
                    setErrorMessage('Email is already exists, please use a different email');
                }
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white rounded p-3' style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className='text-center'>Registration Form</h2>
                {errorMessage && <div className='alert alert-danger' role='alert'>{errorMessage}</div>}
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' id='name' placeholder='Enter your name' autoComplete='off' name='name' value={name} className='form-control rounded-0' onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='text' id='email' placeholder='Enter your email' autoComplete='off' name='email' value={email} className='form-control rounded-0' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' id='password' placeholder='Enter your Password' autoComplete='off' name='password' value={password} className='form-control rounded-0' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type='submit' className='btn btn-success w-100 rounded-0 my-2'>Register</button>
                    <p className='text-center mt-3'>Already Have an account</p>
                    <button className='btn btn-default border w-100 bg-light rounded-0'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
