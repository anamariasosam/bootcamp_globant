import React, { Fragment } from 'react'
import Header from '../components/Header'
import CategoryItem from '../components/CategoryItem'
import { categories } from '../data/data'
import '../styles/Category.css'

const categoriesList = () =>
  categories.map(category => (
    <CategoryItem key={category.name} category={category} />
  ))

const CategoryList = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <ul>{categoriesList()}</ul>
      </div>
    </Fragment>
  )
}

export default CategoryList
