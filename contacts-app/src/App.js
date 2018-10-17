import React, { Component } from 'react'
import './App.css'
import ContactsList from './ContactsList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: [],
      favorites: [],
    }
		
		this.addToFavorites = this.addToFavorites.bind(this)
	}
	
	addToFavorites(contact) {
		const contacts = this.state.contacts.filter(
			c => c.id.value !== contact.id.value
		)

		const favorites = this.state.favorites.concat(contact)

		this.setState({
			contacts,
			favorites,
		})
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



  render() {
    return (
      <div className="main">
        <header>
          <h1>Contacts App</h1>
        </header>
        <div className="container">
          <ContactsList
            contacts={this.state.contacts}
            title="Contacts"
						addToFavorites={this.addToFavorites}
						key="1"
          />
          <ContactsList
            contacts={this.state.favorites}
            title="Favorites"
						addToFavorites={this.addToFavorites}
						key="2"
          />
        </div>
      </div>
    )
  }
}

export default App
