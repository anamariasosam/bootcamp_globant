import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						Home
					</Link>
				</li>
				<li>
					<Link to="/contacts">
						Contacts List
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
