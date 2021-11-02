import React from 'react';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Admin from 'pages/Admin/IndexA';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css'
import PublicLayout from 'layout/PublicLayout';
import HomeLayout from 'layout/HomeLayout';
import AuthLayout from 'layout/AuthLayout';
import Inmuebles from 'pages/Admin/Inmuebles';
import Usuarios from 'pages/Admin/Usuarios';
import Ventas from 'pages/Admin/Ventas';

function App() {
  return (
    <Router>
      <Switch>
         <Route path={['/admin','/admin/inmuebles','/admin/usuarios','/admin/ventas']}>
            <HomeLayout>
               <Switch>
                  <Route path='/admin/inmuebles'>
                     <Inmuebles/>
                  </Route>
                  <Route path='/admin/usuarios'>
                     <Usuarios/>
                  </Route>
                  <Route path='/admin/ventas'>
                     <Ventas/>
                  </Route>
                  <Route path='/admin'>
                     <Admin/>
                  </Route>
               </Switch>
            </HomeLayout>
         </Route>
         <Route path={['/login','/registro']}>
            <AuthLayout>
               <Switch>
                  <Route path='/login'>
                     <Login/>
                  </Route>
                  <Route path='/registro'>
                     <Registro/>
                  </Route>
               </Switch>
            </AuthLayout>
         </Route>
         <Route path={['/']}>
            <PublicLayout>
               <Switch>
                  <Route path='/'>
                     <Index/>
                  </Route>
               </Switch>
            </PublicLayout>
         </Route>
      </Switch>
    </Router>
  
  );
}





export default App;
