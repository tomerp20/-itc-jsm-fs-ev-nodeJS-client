import { useState } from 'react'
import './css/Register.css'
export const Register = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const handleRegister = () => {
            //Write code that sends the new user information to the server
            //Which means, create new user
            //And when finished, console.log() the new user.
            // fetch('path',{
            //     method:'POST',
            //     body:dfgdf
            // })
            


        }
    return (
        <div className="Register">
            <div>
                <h1>Registration</h1>
            </div>
            <div>
                <input placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
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