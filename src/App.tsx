import { useState } from 'react'
import logo from './logo.svg'
import 'antd/dist/antd.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Login } from './components/Login'
import { AuthProvider } from './context/AuthProvider';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { NftDisplayer } from './components/NftDisplayer';
import { ProtectedLayout } from './components/ProtectedLayout';

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Redirect to='/home'/>
          </Route>

          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/register'>
            <Register/>
          </Route>
          
          <ProtectedLayout>
            <Route path='/nft'>
              <NftDisplayer/>
            </Route>
          </ProtectedLayout>

            <Route path='/addnft'>
            </Route>

        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
