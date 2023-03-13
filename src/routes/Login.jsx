import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        username,
        password,
      });


      Cookies.set('token_contacts', response.data.access_token, { expires: 7 }); 
      window.location.reload();
    } catch (error) {
      alert('Datos erroneos');
    }
  };


/*   function setToken(token) {
    Cookies.set('token', token, { expires: 7 }); 
  }
 */
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="buttom">Iniciar sesión</button>
    </form>
  );
}

export default Login;