import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/css/base/base.css'
import Cabecalho from './components/cabecalho';
import Home from "./Pages/Home";
import Pagina404 from './Pages/Pagina404';
import Sobre from "./Pages/Sobre";
import Post from './Pages/Post';
import Categorias from './Pages/Categorias';


function App() {
  return (
  <BrowserRouter>
    <Cabecalho/>
    <Switch>
      <Route exact path ='/'> {/*O path de tem que estar em Route, senão o react nao consegue distingur as rotas*/}
        <Home />
      </Route>

      <Route path='/sobre'>
        <Sobre />
      </Route>

      <Route  path='/categoria/:id'>
        <Categorias/>
      </Route>

      <Route path='/posts/:id'>
        <Post />
      </Route>

      <Route>
        <Pagina404 />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

export default App
