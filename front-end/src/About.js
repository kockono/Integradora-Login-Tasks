import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Barrita from './components/auth/barrita';
import './About.css';

const About = () => {

    return ( 
        <div className="division">
         <Barrita/>
         <br/>
       
    
         <div class="responsivo">        
         
         <h3 class="transparente">Acerca de..</h3>
                <h2>Objetivo</h2>
                    <p>Controlar las salidas de gas mediante una aplicación móvil conectada a un módulo 
                            inalámbrico de hardware abierto junto a la aplicación web, en la que se observan los movimientos que 
                            se tienen en las instalaciones de gas comerciales y domésticas.
							</p>
                        <h2>A Futuro</h2>
                        <p>Expander nuestro producto a multiples empresas alrededor de todo el estado de chihuahua,
                        para despues movilizarnos por todo el pais y mas tarde el mundo.
                        </p>
                </div>
         </div>
     );
}
 
export default About;