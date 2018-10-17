import React from 'react'
import ContactCard from './ContactCard'
import PropTypes from 'prop-types'

const ContactsList = props => {
  const { title, contacts, removeContactCard, toggleFavorites } = props
  return (
    <section>
      <h2>{title}</h2>
      {contacts.map(contact => (
        <ContactCard
          contact={contact}
          key={contact.email}
          removeContactCard={() => removeContactCard(contact.email)}
          toggleFavorites={() => toggleFavorites(contact)}
          listType={title.toLowerCase()}
        />
      ))}
    </section>
  )
}

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  contact: PropTypes.object.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
}

ContactsList.defaultProps = {
  contact: {},
}
export default ContactsList
