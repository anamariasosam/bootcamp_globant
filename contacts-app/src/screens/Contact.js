import React, { Fragment } from 'react'
import '../styles/Contact.css'
import Menu from '../components/Menu'

const Contact = props => {
  const { contact } = props.location.state
  const { picture, name, gender, cell, email, location, dob } = contact
  return (
    <Fragment>
      <Menu />
      <section className="contact--container">
        <div className="contact--info">
          <div>
            <img src={picture.large} alt="profile" />
          </div>
          <div>
            <h2 className="contact--name">
              {name.first} {name.last}
            </h2>
            <p>Gender: {gender}</p>
            <p>Age: {dob.age}</p>
            <p>Phone: {cell}</p>
            <p className="contact--email">{email}</p>
          </div>
        </div>
        <div className="contact--location">
          <div>
            <h3>Location Info</h3>
            <p>Street: {location.street}</p>
            <p>City: {location.city}</p>
            <p>State: {location.state}</p>
            <p>Zip Code: {location.postcode}</p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Contact
