import React from 'react';
import { Link } from "react-router-dom";

export default class ProjectItem extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         onHover: false
      }
   }

    toggleColor = () => {
      const {project} = this.props;
      const { id } = project;
      const {onHover} = this.state;

      this.setState((prevState) => {
         return {
           onHover: !prevState.onHover,
         };
      });

      const title = document.querySelectorAll('.title-projects');
      const technologies = document.querySelectorAll('.technologies');

      for (let singleTitle of title) {   
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
      const {returnLink, photo, title, linkWeb, id, technologies, linkCode, description1, description2, description3} = project;

      return (
        <div className="projects">
          <div className={`project3 ${index === 0 || index === 2 || index === 4 || index === 6 || index === 8 ? 'black' : 'white'}`}>
            <div className={`img-container-projects ${returnLink ? "margin4" : "margin3"}`}>
              <Link className={`link-return ${returnLink ? "" : "hidden"}`} to="/">
                {returnLink}
              </Link>
              <a href={linkWeb} className="photo-link" target="_blank" rel="noopener noreferrer"> 
                <img className={`photo3 ${index === 0 || index === 2 || index === 4 || index === 6 || index === 8 ? 'border2' : 'border1'}`} src={photo} alt={title}/>
              </a>
            </div>
            <div className="description3">
              <a href={linkWeb} className="link-web" target="_blank" rel="noopener noreferrer">
                <p className="title-projects" id={id} onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{title}</p>
              </a>
              <br/><br/>
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{description1}</p>
              <br/> 
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{description2}</p>
              <br/>   
              <p onMouseOver={this.toggleColor} onMouseOut={this.toggleColor}>{description3}<span className='technologies' id={id}>{technologies}</span></p>
              <br/>     
              <p>
                <a href={linkWeb} className="link-web" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-laptop icon"></i>
                </a>
                <a href={linkCode} className="link-code" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-code icon"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      )
   }
}

