import React, { Fragment } from 'react'
import Menu from './components/Menu'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './screens/Home'
import Agenda from './screens/Agenda'

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
				<Menu />
				<Route path='/' component={Home} exact/>
				<Route path='/contacts' component={Agenda} exact/>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
