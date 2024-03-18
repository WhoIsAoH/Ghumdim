import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import loginimg from '../Assets/loginimg.png'

const LoginSignup = () => {
    const [action, setAction] = useState('Sign Up');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        if (action === 'Sign Up') {
            if (!name || !email || !password) {
                setErrorMessage('Please fill in all fields.');
                return;
            }
        } else {
            if (!email || !password) {
                setErrorMessage('Please fill in all fields.');
                return;
            }
        }

        // Reset error message
        setErrorMessage('');

        // Form submission logic
        // You can implement your login/signup logic here
    };

    return (
        <div className='container'>
            <div className='container-left'>
                <img src={loginimg} alt='' />
            </div>

            <div className='container-right'>
                <div className='header'>
                    <div className='signup'>{action}</div>
                    <div className='underline'></div>
                </div>

                <div className='inputs'>
                    {action === 'Login' ? (
                        <div></div>
                    ) : (
                        <div className='input'>
                            <img src={user_icon} alt='' />
                            <input
                                type='text'
                                placeholder='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    )}

                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input
                            type='email'
                            placeholder='Email Id'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {action === 'Sign Up' ? (
                    <div></div>
                ) : (
                    <div className='forgot-password'>
                        Forgot Password? <span>Click Here!</span>
                    </div>
                )}

                {errorMessage && <div className='error-message'>{errorMessage}</div>}

                <div className='submit-container'>
                    <div
                        className={action === 'Login' ? 'submit gray' : 'submit'}
                        onClick={() => {
                            setAction('Sign Up');
                            setErrorMessage('');
                        }}>
                        Signup
                    </div>
                    <div
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={() => {
                            setAction('Login');
                            setErrorMessage('');
                        }}>
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
