import React, { Component, Fragment } from 'react'
import debounce from 'lodash.debounce'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import TasksList from '../components/TasksList'
import '../styles/TodoList.css'

export default class TodoList extends Component {
  constructor(props) {
    super(props)

    const { name, image } = this.props.location.state.category
    this.state = {
      name,
      image,
      tasks: [],
      task: '',
    }

    this.addTask = debounce(this.addTask, 700)
    this.removeTask = this.removeTask.bind(this)
    this.saveTask = this.saveTask.bind(this)
  }

  getTasks() {
    if (localStorage.hasOwnProperty(this.state['name'])) {
      const tasks = localStorage.getItem(this.state['name']).split(',')

      this.setState({
        tasks,
      })
    }
  }

  componentDidMount() {
    this.getTasks()

    window.addEventListener('beforeunload', this.saveTask)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.saveTask)

    this.saveTask()
  }

  saveTask() {
    if (this.state.tasks.length) {
      localStorage.setItem(this.state['name'], this.state.tasks)
    }
  }

  addTask(task) {
    if (task) {
      const tasks = this.state.tasks.concat(task)
      this.setState({
        tasks,
        task: '',
      })
    }
  }

  removeTask(task) {
    const tasks = this.state.tasks.filter(t => t !== task)
    this.setState({
      tasks,
    })
  }

  onInputChange(task) {
    this.setState({ task })
    this.addTask(task)
  }

  render() {
    const { name, image } = this.state

    return (
      <Fragment>
        <Link to="/" className="homeLink">
          ← Go Back
        </Link>
        <Header image={image} title={name} />
        <div>
          <input
            type="text"
            className="todoInput"
            placeholder="✍️ Add a task..."
            value={this.state.task}
            onChange={e => this.onInputChange(e.target.value)}
          />
          <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
        </div>
      </Fragment>
    )
  }
}
