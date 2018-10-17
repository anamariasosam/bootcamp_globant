import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Contact from './screens/Contact'
import Agenda from './screens/Agenda'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Route path="/" component={Agenda} exact />
        <Route path="/contact/:contactName" component={Contact} exact />
      </div>
    </BrowserRouter>
  )
}

export default App
