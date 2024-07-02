import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { setUser } from '../userSlice';
import './Login.css';

const initialUsers = [
    { username: 'amrutha', password: 'pass'},
    { username: 'anu', password: 'pass2'},
    { username: 'ajay', password: 'pass3'},
    { username: 'anil', password: 'pass4'},
    { username: 'achu', password: 'pass5'},
    { username: 'manu', password: 'pass6'},
    { username: 'aparna', password: 'pass7'},
    { username: 'akku', password: 'pass8'},
    { username: 'amar', password: 'pass9'},
    { username: 'anitha', password: 'pass10'}
];

const Login = () => {
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
    localStorage.setItem('users', JSON.stringify(initialUsers));
    }, []);

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((user: { username: string, password: string }) => user.username === username && user.password === password);

        if (user) {
           dispatch(setUser(username))
            navigate('/home', { state: { username } });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='container'>
            <h2>Login</h2>
            <div className='form'>
                <div>
                    <input className='input'
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input className='input'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='button_design' onClick={handleLogin}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
