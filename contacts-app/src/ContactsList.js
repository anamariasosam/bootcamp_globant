import React from 'react'
import PropTypes from 'prop-types'
import ContactCard from './ContactCard'

const ContactsList = props => {
  const { title, contacts } = props
  return (
    <section>
      <h2>{title}</h2>
      {contacts.map(contact => (
        <ContactCard
          contact={contact}
          key={contact.email}
					addToFavorites={props.addToFavorites}
        />
      ))}
    </section>
  )
}

ContactsList.propTypes = {
	title: PropTypes.string,
	contact: PropTypes.object,
	addToFavorites: PropTypes.func,
}

export default ContactsList
