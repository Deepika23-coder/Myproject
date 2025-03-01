import React from 'react';
import'./Home.css';
import Logo from "./Logo.jpg"
    const Home=()=>{
        return(
            <div>
            <div className='header'>
                <div className='Navibar'>
              <img src={Logo} alt=""/>
            <h1>SHOPPING</h1>
            </div>
            </div>
            <div className='base'>
            <div className='first'>
            <img src='white dress' alt="dress"/>
            <p>Whitedress</p>
            <p> price $60</p>
            </div>
            <div className='second'>
            <img src="blue dress.jpg" alt='dress'/>
            <p>Bluedress</p>
            <p> price $70</p>
            </div>
            <div className='third'>
            <img src ="red dress" alt="dress"/>
            <p>Reddress</p>
            <p>price $50</p>

            </div>
            </div>
            </div>
        )
    
    };
    export default Home;
