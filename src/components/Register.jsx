
import axios from 'axios';
import { useState } from 'react'
import './css/Register.css'
export const Register = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleRegister = () => {
            //Write code that sends the new user information to the server
            //Which means, create new user
            //And when finished, console.log() the new user.
            // fetch(`http://localhost:4000/users/registration?apikey=1234`, {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         username,
            //         email,
            //         password
            //     }),
            //     headers: {
            //         ['Content-type'] : 'application/json'
            //     }
            // }).then(response => {
            //     response.json().then(data => {
            //         console.log({data})
            //     })
            // }).catch(error => {
            //     console.log({
            //         error
            //     })
            // })
            axios.post(`http://localhost:4000/users/registration?apikey=1234`,{
                username,
                password,
                email
            }).then(response => {
                console.log(
                    response.data
                )
                }).catch(error => {
                    console.log({
                        error
                    })
                })

        }
    return (
        <div className="Register">
            <div>
                <h1>Registration</h1>
            </div>
            <div>
                <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={handleRegister}>Register!</button>
            </div>
        </div>
    )
}