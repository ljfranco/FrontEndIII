import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Beer from "./pages/Beer";
import Contacto from './pages/Contacto'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />}>
          <Route index element = {<Home />}/>
          <Route path='/contacto' element = {<Contacto />} />
          <Route path='/beer/:id' element = {<Beer />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
