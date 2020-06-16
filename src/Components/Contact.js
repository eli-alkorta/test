import React from "react";
import { Link } from "react-router-dom";


class Contact extends React.Component {
   constructor(props) {
      super(props); 
      this.state = {
         status: ""
      };
   }

   submitForm = (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
         } else {
            this.setState({ status: "ERROR" });
         }
      };
      xhr.send(data);
   }
   
   
   render() {
      const { status } = this.state;
      return (
         <div className="contact">
            <Link className="link-home" to="/">
               Volver
            </Link>
            <h2 className="contact-title">¿Quieres ponerte en contacto conmigo?</h2>
            <form id="contact-form" method="POST" onSubmit={this.submitForm} action="https://formspree.io/xzbjrgpp">
               <div className="name-container">
                  <label htmlFor="name" className="name">Nombre</label>
                  <input type="text" className="name-input" name="name-input"/>
               </div>
               <div className="email-container">
                  <label htmlFor="email" className="email">Email</label>
                  <input type="email" className="email-input" name="email-input" />
               </div>
               <div className="message-container">
                  <label htmlFor="message" className="message">Mensaje</label>
                  <textarea className="message-textarea" name="message-textarea"/>
               </div>
                  {status === "SUCCESS" ? <p>¡Gracias!</p> : 
                     <button type="submit" className="submit-button">Enviar</button>}
                  {status === "ERROR" && <p>Oh no! Ha habido un error.</p>}
            </form>
            <footer className="footer">
               <div className="copyright">
                  <small>Eli Alkorta &copy;2020</small>
               </div>
               <div className="icons">
                  <a href="https://www.facebook.com/eli.alkorta" target="_blank" rel="noopener noreferrer" title="Facebook" className="fb-link">
                     <i id="footer-icon" className="fab fa-facebook-square"/>
                  </a>
                  <a href="mailto:elialkor@gmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="email-link">     
                     <i id="footer-icon" className="far fa-envelope"/>
                  </a>
                  <a href="https://twitter.com/EliAlkorta" target="_blank" rel="noopener noreferrer" title="Twitter" className="tw-link">
                     <i id="footer-icon" className="fab fa-twitter-square"/>
                  </a>
                  <a href="https://www.linkedin.com/in/elisabet-alcorta-barbe/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="linkedin-link">
                     <i id="footer-icon" className="fab fa-linkedin"/>
                  </a>
                  <a href="https://github.com/eli-alkorta" target="_blank" rel="noopener noreferrer" title="GitHub" className="github-link">
                     <i id="footer-icon" className="fab fa-github"/>
                  </a>
               </div>
            </footer>
         </div>
      )
   }
}
      
      
export default Contact;