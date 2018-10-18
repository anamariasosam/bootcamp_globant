import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import TodoList from './views/TodoList'
import CategoryList from './views/CategoryList'
import './styles/App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Route path="/" component={CategoryList} exact />
        <Route path="/todo/:categoryName" component={TodoList} exact />
      </div>
    </BrowserRouter>
  )
}

export default App
