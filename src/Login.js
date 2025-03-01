import React from 'react';
import './Login.css'
import './Home'


const Login = () => {
    function signup(){
        window.location.replace("/home")
    }
  return (
    <div classname='parent'>
     <div className='child'>
        <div>
           <h2 classname='Login'>LoginPage</h2>
           <input type="email" placeholder='Enter EmailId'></input>
        </div>
        <div>
            <input type="password"placeholder='Enter password'></input>
        </div>
        <div>
             <button onClick={signup} type="submit" > Login</button>
        </div>
    </div>
    </div>


  );
};

export default Login;











