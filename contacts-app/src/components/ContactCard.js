import React from 'react'
import PropTypes from 'prop-types'

const ContactCard = props => {
  const { toggleFavorites, removeContactCard, contact, listType } = props
  const { picture, name, location } = contact
  return (
    <article>
      <button onClick={removeContactCard}>
        <span>X</span>
      </button>
      <figure>
        <img src={picture.large} alt="author" />
        <figcaption>
          <button onClick={toggleFavorites} className="star">
            {listType === 'favorites' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
            ) : (
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
              </svg>
            )}
          </button>
          <p>{name.first}</p>
          <p>
            {location.city}, {location.state}
          </p>
        </figcaption>
      </figure>
    </article>
  )
}

ContactCard.propTypes = {
  toggleFavorites: PropTypes.func,
  removeContactCard: PropTypes.func,
  contact: PropTypes.shape({
    picture: PropTypes.PropTypes.shape({
      large: PropTypes.string,
    }),
    name: PropTypes.shape({
      first: PropTypes.string,
    }),
    location: PropTypes.shape({
      city: PropTypes.string,
      state: PropTypes.string,
    }),
  }),
  listType: PropTypes.string,
}

export default ContactCard
