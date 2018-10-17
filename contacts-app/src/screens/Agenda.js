import React, { Component, Fragment } from 'react'
import '../styles/Agenda.css'
import ContactsList from '../components/ContactsList'

class ContactScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      favorites: [],
    }

    this.removeContactCard = this.removeContactCard.bind(this)
    this.toggleFavorites = this.toggleFavorites.bind(this)
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(result => result.json())
      .then(data => {
        this.setState({
          contacts: data.results,
        })
      })
  }

  toggleFavorites(list) {
    const lisToToRemove = list === 'favorites' ? 'contacts' : 'favorites'

    return contact => {
      const items = this.state[list].concat(contact)

      this.setState(() => {
        return {
          [list]: items,
        }
      })

      this.removeContactCard(lisToToRemove)(contact.email)
    }
  }

  removeContactCard(list) {
    return email => {
      const items = this.state[list].filter(contact => contact.email !== email)

      this.setState(() => {
        return {
          [list]: items,
        }
      })
    }
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>Contacts App</h1>
        </header>
        <div className="container">
          <ContactsList
            contacts={this.state.contacts}
            title="Contacts"
            removeContactCard={this.removeContactCard('contacts')}
            toggleFavorites={this.toggleFavorites('favorites')}
          />
          <ContactsList
            contacts={this.state.favorites}
            title="Favorites"
            removeContactCard={this.removeContactCard('favorites')}
            toggleFavorites={this.toggleFavorites('contacts')}
          />
        </div>
      </Fragment>
    )
  }
}

export default ContactScreen
