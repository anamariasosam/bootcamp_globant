import React from 'react'
import '../styles/Header.css'

const getDay = () => {
  const date = new Date()
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  return weekday[date.getDay()]
}

const Header = props => {
  const { image, title } = props
  return (
    <header>
      <img src={image} alt="logo" />
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  image: require('../images/logo.png'),
  title: `Happy ${getDay()} ☕️ 📚`,
}

export default Header
