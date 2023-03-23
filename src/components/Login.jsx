import { useState } from 'react'
import './css/Register.css'
export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => { 
        fetch(`http://localhost:4000/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            res.json().then(data => {
                //I have the token. 
                //Save it for persistance
                localStorage.setItem('token', data.data.token)
                console.log('login went well, token saved')
            })
        }).catch(err => {
            console.log(`login failed: ${err}`)
        })
    }
    return (
        <div className="Register">
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={handleLogin}>Login!</button>
            </div>
        </div>
    )
}
