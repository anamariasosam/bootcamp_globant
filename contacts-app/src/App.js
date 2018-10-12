import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			contacts: [],
			favorites: [],
		}
	}

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=10')
		.then( result => result.json() )
		.then(data => {
			this.setState({
				contacts: data.results,
			})
		})
	}

  render() {
    return (
      <div className="App">
				<ContactsList 
					contacts={this.state.contacts}
					title="Contacts"
				/>
				<ContactsList 
					contacts={this.state.favorites}
					title="Favorites"
				/>
      </div>
    );
  }
}

const ContactsList = (props) => {
	return (
		<div>
			{
				props.contacts.map( contact => <ContactCard contact={contact} key={contact.email}/>)
			}
		</div>
	)
}

class ContactCard extends Component {	
	render() {
		return (
			<div>
				<figure>
					<img 
						src={this.props.contact.picture.large} 
						alt="author" />
					<figcaption>{this.props.contact.name.first}</figcaption>
				</figure>
				<button>Favorito</button>
				<button>Remover</button>
			</div>
		)
	}
}

export default App;
