import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../index.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4444/auth/register', {
                method: 'POST',
                body: JSON.stringify({
                    login: username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            console.log('Успех:', JSON.stringify(json));
            setPassword('')
            setUsername('')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className={'h-[100vh] bg-gray-600 flex justify-center items-center'}>
            <form onSubmit={e => e.preventDefault()}
                  className={'w-1/4 h-60 mx-auto'}
            >
                <h1 className={'text-lg text-white text-center'}>Регистрация</h1>
                <label className={'text-xs text-gray-400'}>
                    Username:
                    <input type="text"
                           value={username}
                           onChange={e => setUsername(e.target.value)}
                           placeholder={'Username'}
                           className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-600'}
                    />
                </label>
                <label className={'text-xs text-gray-400'}>
                    Password:
                    <input type="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           placeholder={'Password'}
                           className={'mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-600'}
                    />
                </label>
                <div className={'flex gap-8 justify-center mt-4'}>
                    <button onClick={handleSubmit} type="submit"
                            className={'flex justify-center items-center text-xs text-white rounded-sm py-2 px-4 bg-gray-600'}>Подтвердить
                    </button>
                    <Link to={'/login'} className={'flex justify-center items-center text-xs text-white'}>
                        Уже зарегистрированы ?
                    </Link>
                </div>
            </form>
        </div>

    );
};

export default Register;