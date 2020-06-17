import React from 'react';
import history from './history';
import { Link } from "react-router-dom";


const translations = {
   es: {
      1: "Sobre mí",
      2: "Proyectos",
      3: "En proceso",
      4: "Contacto"
  },
   en: {
      1: "About me",
      2: "Projects",
      3: "Work in progress",
      4: "Contact"
  } 
};

const linkTexts = {
   ...translations.es
}

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isEnglish: false
      }
   }

   toggleLanguage = (event) => {
      const {id} = event.target;
     
      this.setState((prevState) => {
         const language = !this.state.isEnglish ? "en" : "es";
         linkTexts[id] = translations[language][id];
         return {
           isEnglish: !prevState.isEnglish,
         };
      });
   }
 
   render() {
      return (
         <div className="App">
            <div className="about-me-container">
               <Link to="/about-me" className="link" id="1" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/about-me')}>{linkTexts[1]}</Link>
            </div>
            <div className="projects-container">
               <Link to="/projects" className="link" id="2" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/projects')}>{linkTexts[2]}</Link>
            </div>
            <div className="in-progress-container">
               <Link to="/in-progress" className="link" id="3" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/in-progress')}>{linkTexts[3]}</Link>
            </div>
            <div className="contact-container">
               <Link to="/contact" className="link" id="4" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/contact')}>{linkTexts[4]}</Link>
            </div>
         </div> 
         );
      }
   }