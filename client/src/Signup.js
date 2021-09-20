import {useHistory} from 'react-router-dom'
  import React, {useState} from 'react';
  import env from "react-dotenv";
  import {Input, Form} from './styled';

function Signup({setCurrentUser}){
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const[lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')

  const [errors, setErrors] = useState(null)
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()
    const user = { 
        first_name:firstname,
        last_name:lastname,
        email,
        password,
        username,
        
    }
    const res = await fetch(`${env.API_URL}/users`,{
        method: 'POST',
        // credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({user})
    });
    const userData = await res.json();
    if(res.ok){
        console.log(userData)
        setCurrentUser(userData)
        history.push('/')
    } else {
        setErrors(userData.message)
    }

};

  return(
     <div>
         <Form onSubmit={handleSubmit}>
                <h1>Sign up</h1>
                <Input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                ></Input>
                         <Input
                     type="text"
                     placeholder="First Name"
                     value={firstname}
                     name="firstname"
                     onChange={(e) => setFirstname(e.target.value)}></Input>
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    name="lastname"
                    onChange={(e) => setLastname(e.target.value)}></Input>
                       <Input
                    type="text"
                    placeholder="Email Address"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}></Input>
                        <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}></Input>
                <Input submit type="submit" value="Sign up" className="signupButton"></Input>
                {errors?errors.map(error => <div>{error}</div>):null}
            </Form>
</div>
  )}
  export default Signup;