import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ category }) => {
  const { name, image } = category
  return (
    <li>
      <Link
        to={{
          pathname: '/todo/' + name.toLowerCase(),
          state: { category },
        }}
        className="contact--link"
      >
        <img src={image} alt={name} />
        <span>{name}</span>
      </Link>
    </li>
  )
}

export default CategoryItem
