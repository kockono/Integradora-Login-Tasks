import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Principal from './components/auth/Principal';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Proyectos from './components/proyectos/Proyectos';
import esp32 from './esp32/esp32'
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';
import About from './About';

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Principal}/>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                    <Route exact path="/about" component={About} />
                    <RutaPrivada exact path="/proyectos" component={Proyectos} />
                    <RutaPrivada exact path="/gas" component={esp32}/>
                </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
