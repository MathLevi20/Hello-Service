import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate();

    const [username, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }
    const client = axios.create({
        baseURL: " https://nightmarelight.onrender.com" ,

      });


    const handleLogin = async () => {
        if (username && password) {
            const isLogged = await client.post('/auth/signin', {
            username: username,
            password: password} ).then(function (response:any) {
                console.log(response);
                localStorage.setItem('acetoken',response.data.acetoken);
                localStorage.setItem('reftoken',response.data.reftoken);
                localStorage.setItem('id',response.data.id);
              })
              .catch(function (error:any) {
                console.error(error);
              });
        }
    }

    return (
        <div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-rows-1 ">
            <input
                type="text"
                value={username}
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
            />
            <button onClick={handleLogin}>Logar</button>
        </div>
        </div>
        </div>
    );
}