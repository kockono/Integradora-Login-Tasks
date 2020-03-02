import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Barrita from './barrita';
import './principa.css';


const Principal = () => {



    return ( 
        <div className="seccion-principal">
         <Barrita/>
         

<div class="bg-image"></div>
<div id="wrapper">
       <div class="bg-text">  
           <div class="centrado">
             <span class="titulo">Ventium Proyect</span>
            <p><a href="/login"><button class="button button1">Login</button></a> </p> 
            </div>
         </div>
</div>
       
      </div > 
     );
}
 
export default Principal;