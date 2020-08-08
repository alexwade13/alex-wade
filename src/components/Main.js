import PropTypes from 'prop-types'
import React from 'react'

import pic01 from '../images/monkey_alex.jpg'
import pic02 from '../images/turkish_soldier.jpg'

import headshot01 from '../images/A1.jpg'
import headshot02 from '../images/A2.jpg'
import headshot03 from '../images/A3.jpg'


import resume_pdf from '../resume/resume.pdf'
import resume_png from '../resume/resume.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from "react-responsive-carousel"



class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Bio</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hey, I'm Alex Wade! New York city based actor, web developer, and Harry Potter impersonator. 
            I went to Bucknell University and took classes with Gary Grant and Anjalee Hutchinson.
            Additionally, I've taken classes at The Acting Studio with James Price, Rodney Ferrer, and many more.
          </p>
          <p>
            I've been an actor since my freshman year of high school, when a friend of mine
            forced me to do the musical because they didn't have enough boys. Turns out,
            it was a pretty good time and my life long dreams were planted.
            I went to Bucknell University, and got a degree in Computer Science. I took every
            theatre class and auditioned for every play that I could! 
            After college, I moved to NYC and continued my studies at The Acting Studio 
            and started auditioning. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <a href={resume_pdf} target="_blank" rel="noreferrer" download="Alex Wade - Resume">Download</a>
          <span className="image main">
            <img src={resume_png} alt="" />
          </span>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Media</h2>
          <span className="image main">
            <Carousel autoPlay infiniteLoop centerMode>
              <div>
                <img alt="" src={headshot02} />
              </div>
              <div>
                <img alt="" src={headshot03} />
              </div>
              <div>
                <img alt="" src={headshot01} />
              </div>
            </Carousel>
          </span>
            
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Email me at <a href="mailto:alex.wade13@gmail.com" target="_blank">alex.wade13@gmail.com</a>!
          </p>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          {close}
        </article>
      </div>
    )
  }
}

          // <form method="post" action="mailto:alex.wade13@gmail.com" enctype="text/plain">
          //   <div className="field half first">
          //     <label htmlFor="name">Name</label>
          //     <input type="text" name="name" id="name" />
          //   </div>
          //   <div className="field half">
          //     <label htmlFor="email">Email</label>
          //     <input type="text" name="email" id="email" />
          //   </div>
          //   <div className="field">
          //     <label htmlFor="message">Message</label>
          //     <textarea name="message" id="message" rows="4"></textarea>
          //   </div>
          //   <ul className="actions">
          //     <li>
          //       <input type="submit" value="Send Message" className="special" />
          //     </li>
          //     <li>
          //       <input type="reset" value="Reset" />
          //     </li>
          //   </ul>
          // </form>
          // <ul className="icons">
          //   <li>
          //     <a
          //       href="https://twitter.com/HuntaroSan"
          //       className="icon fa-twitter"
          //     >
          //       <span className="label">Twitter</span>
          //     </a>
          //   </li>
          //   <li>
          //     <a href="https://codebushi.com" className="icon fa-facebook">
          //       <span className="label">Facebook</span>
          //     </a>
          //   </li>
          //   <li>
          //     <a href="https://codebushi.com" className="icon fa-instagram">
          //       <span className="label">Instagram</span>
          //     </a>
          //   </li>
          //   <li>
          //     <a
          //       href="https://github.com/codebushi/gatsby-starter-dimension"
          //       className="icon fa-github"
          //     >
          //       <span className="label">GitHub</span>
          //     </a>
          //   </li>
          // </ul>

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
