import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoList from './views/TodoList'
import CategoryList from './views/CategoryList'
import './styles/App.css'

const App = () => {
  return (
    <Router>
      <div className="main">
        <Route path="/" component={CategoryList} exact />
        <Route path="/todo/:categoryName" component={TodoList} />
      </div>
    </Router>
  )
}

export default App
