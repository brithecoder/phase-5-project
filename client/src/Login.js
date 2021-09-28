import {useHistory} from 'react-router-dom'
import React, {useState} from 'react';
import {Input, Form} from './styled';

function Login({setCurrentUser}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            username:username,
            password:password
        }
        const res = await fetch(`${env.REACT_APP_API_URL || "/"}login`,{
             //=>'sessions#create'
            method: 'POST',
            // credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(userData.id){
            console.log(userData)
            setCurrentUser(userData)
            history.push('/')
        } else {
            alert(userData.errors)
        }
    };


    return (
        <>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <form onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <Input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                ></Input>
                <br></br>
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}></Input>
                   <br></br>
                <Input submit type="submit" value="Log in"></Input>
                {errors?errors.map(error => <div>{error}</div>):null}
              </form>
        </>
    )

}
export default  Login;