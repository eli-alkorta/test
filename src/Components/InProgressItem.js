import React from 'react';
import { Link } from "react-router-dom";


export default class InProgressItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         onHover: false
      }
  }


    answerToButton = (event) => {
      const button1 = document.querySelectorAll('.yes-button');
      const button2 = document.querySelectorAll('.no-button');

      if (event.target.classList.contains('yes-button')) {
         event.target.innerText = '¡GRACIAS!'
      } else {
         event.target.innerText = 'Le daré una vuelta...'
      }

    setTimeout(function() {
      document.querySelectorAll('.yes-button');
        for (let buttonYes of button1){
          buttonYes.innerText='Sí'
        }

      document.querySelectorAll('.no-button');
        for (let buttonNo of button2){
          buttonNo.innerText='No'
        }
      }, 3000);     
    }

    toggleColor = () => {
      const {project} = this.props;
      const {id} = project;
      const {onHover} = this.state;

      this.setState((prevState) => {
         return {
           onHover: !prevState.onHover,
         };
      });

      const title = document.querySelectorAll('.title');
      const technologies = document.querySelectorAll('.technologies');

      for(let singleTitle of title){   
        if (singleTitle.id === id && !onHover) {
          singleTitle.classList.add(id);
        } else {
          singleTitle.classList.remove(id);
        }
      }

        for (let technology of technologies) {
          if (technology.id === id && !onHover) {
            technology.classList.add(id);
          } else {
            technology.classList.remove(id); 
          }
      }
    }  

   
    render() {
      const {index, project} = this.props;
      const {returnLink, photo, title, linkWeb, id, style, description1, description2, technologies, linkCode, button} = project;

      return (
        <div className={`project1 ${index === 0 ? 'white' : 'black'}`}>
          <div className={`img-container ${returnLink ? "margin4" : "margin3"}`}>
            <Link className={`link-return ${returnLink ? "" : "hidden"}`} to="/">
              {returnLink}
            </Link>
              <a href={linkWeb} className="photo-link" target="_blank" rel="noopener noreferrer">  
                <img className={`photo1 ${index === 0 ? 'border1' : 'border2'}`} src={photo} alt={title}/>
              </a>
          </div>
          <div className="description1">
            <a href={linkWeb} className="link-web" target="_blank" rel="noopener noreferrer">
              <p className="title" id={id} onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{title}</p>
              </a>
              <br/><br/>
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>ESTADO: <strong>{style}</strong></p>
              <br/>
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{description1}</p>
              <br/>  
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{description2}<span className='technologies' id={id}>{technologies}</span></p>
              <br/>     
              <p className={`areLinks ${linkWeb && linkCode ? "" : "hidden"}`}>
                <a href={linkWeb} className="link-web" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-laptop icon"></i>
                </a>
                <a href={linkCode} className="link-code" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code icon"></i>
                </a>
              </p>
              <p className={`isButton ${button === 'yes' ? "" : "hidden"}`}>¿Te gusta la idea?&nbsp;&nbsp;&nbsp;
                <button type="button" className="yes-button" onClick={this.answerToButton}>Sí</button>
                <button type="button" className="no-button" onClick={this.answerToButton}>No</button>
              </p>
          </div>
        </div>)
      }
   }
         
