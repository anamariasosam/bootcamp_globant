import React, { Component } from 'react'
import './App.css'

class App extends Component {
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
		console.log(list)
		const removeFrom = list === 'favorites' ? 'contacts' : 'favorites'

		return (contact) => {
			const items = this.state[list].concat(contact)
		
			this.setState(() => {
				return {
					[list] : items
				}
			})

			this.removeContactCard(removeFrom)(contact.email)
		}
	}

  removeContactCard(list) {
		return (email) => {
			const items = this.state[list].filter(
				contact => contact.email !== email
			)
	
			this.setState(() => {
				return {
					[list] : items
				}
			})
		}
  }

  render() {
    return (
      <div className="App">
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
    )
  }
}

const ContactsList = props => {
  return (
		<div>
			<h2>{props.title}</h2>
      {props.contacts.map(contact => (
        <ContactCard
          contact={contact}
          key={contact.email}
          removeContactCard={() => props.removeContactCard(contact.email)}
          toggleFavorites={() => props.toggleFavorites(contact)}
        />
      ))}
    </div>
  )
}

class ContactCard extends Component {
  render() {
    return (
      <div>
        <figure>
          <img src={this.props.contact.picture.large} alt="author" />
          <figcaption>{this.props.contact.name.first}</figcaption>
        </figure>
        <button onClick={this.props.toggleFavorites}>Favorito</button>
        <button onClick={this.props.removeContactCard}>Remover</button>
      </div>
    )
  }
}

export default App
