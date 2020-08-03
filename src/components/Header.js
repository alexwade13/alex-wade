import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/A2.jpg'

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <span className="image header">
          <img src={pic01} alt="" />
        </span>
        <h1>Alex Wade</h1>
        <p>
          New York City based Actor and Web developer
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              topFunction()
              props.onOpenArticle('intro')
            }}
          >
            Bio
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              topFunction()
              props.onOpenArticle('work')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              topFunction()
              props.onOpenArticle('about')
            }}
          >
            Media
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              topFunction()
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
