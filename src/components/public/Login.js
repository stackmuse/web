import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from '../../lib/User';


function Login({ setIsAuthenticated }) {
  const user = new User();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    user.login(username, password);
    setIsAuthenticated(true);
    navigate("/");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' required onChange={e => {setUsername(e.target.value)}}/>
        <input type="password" placeholder='Password' required onChange={e => {setPassword(e.target.value)}}/>
        <input type="submit" value={'Log In'}/>
      </form>
    </>
  );
}

export default Login;
