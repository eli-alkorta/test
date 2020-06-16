import React from 'react';
import history from './history';
import { Link } from "react-router-dom";

export default class Home extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isEnglish: false
      }
   }

   toggleLanguage = (event) => {
      this.setState((prevState) => {
         return {
           isEnglish: !prevState.isEnglish,
         };
      });

      const links = document.querySelectorAll('.link');

      const linkTextsEn = {
         "1": "About me",
         "2": "Projects",
         "3": "Work in progress",
         "4": "Contact"
      };

      const linkTexts = {
         "1": "Sobre mí",
         "2": "Proyectos",
         "3": "En proceso",
         "4": "Contacto"
      };

      for(let singleLink of links){   
         if (singleLink.id === event.currentTarget.id && !this.state.isEnglish){
            if (singleLink.id === event.currentTarget.id){
               singleLink.innerText = linkTextsEn[singleLink.id]
             }
         } else {
            if (singleLink.id === event.currentTarget.id){
               singleLink.innerText = linkTexts[singleLink.id]
             }
      } 
   }}
 
   render() {
      return (
         <div className="App">
            <div className="about-me-container">
               <Link to="/about-me" className="link" id="1" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/about-me')}>Sobre mí</Link>
            </div>
            <div className="projects-container">
               <Link to="/projects" className="link" id="2" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/projects')}>Proyectos</Link>
            </div>
            <div className="in-progress-container">
               <Link to="/in-progress" className="link" id="3" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/in-progress')}>En proceso</Link>
            </div>
            <div className="contact-container">
               <Link to="/contact" className="link" id="4" onMouseOver={this.toggleLanguage} onMouseOut={this.toggleLanguage} onClick={() => history.push('/contact')}>Contacto</Link>
            </div>
         </div> 
         );
      }
   }