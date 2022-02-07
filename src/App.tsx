import 'antd/dist/antd.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import {Login} from './components/Login'
import {Home} from './components/Home';
import {Register} from './components/Register';
import {NftDisplayer} from './components/NftDisplayer';
import {AddNft} from './components/AddNft';

function App() {

  return (
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

          <Route path='/nft'>
            <NftDisplayer/>
          </Route>
          <Route path='/add'>
            <AddNft/>
          </Route>

        </Switch>
      </BrowserRouter>
  )
}

export default App
