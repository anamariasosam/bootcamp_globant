import React from 'react'
import ContactCard from './ContactCard'

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

export default ContactsList
