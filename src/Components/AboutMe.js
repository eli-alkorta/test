import React from 'react';
import { Link } from "react-router-dom";
import bio from "../data/bio";


class AboutMe extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: 'Eli Alkorta',
         adiction: 'los tutoriales y a los cursos',
         job: 'de la comunicación como redactora y community manager',
         job2: 'profesora de inglés, español para extranjeros y vasco',
         tendency: 'a la aventura',
         gift: 'la concentración extrema',
         dose: 'dedicación y perseverancia',
         priceless: 'impagable'
      }
   }
   
   getRandomArrayItem = (array) => {
      return array[Math.floor(Math.random() * array.length)];
   }
   
   changeBio = () => {
         const {names, adictions, jobs, jobs2, tendencies, gifts, dosis, goodThings} = bio;
         
         const name = this.getRandomArrayItem(names)
         const adiction = this.getRandomArrayItem(adictions); 
         const job = this.getRandomArrayItem(jobs); 
         const job2 = this.getRandomArrayItem(jobs2); 
         const tendency = this.getRandomArrayItem(tendencies); 
         const gift = this.getRandomArrayItem(gifts); 
         const dose = this.getRandomArrayItem(dosis);
         const priceless = this.getRandomArrayItem(goodThings);

         const green = document.querySelectorAll('.change');
         for (let singleGreen of green) {
            singleGreen.classList.add('green');
            
         }
         
         return(
            this.setState({
               name,
               adiction,
               job,
               job2,
               tendency,
               gift,
               dose,
               priceless
            }));
         
         
      }

   render() {

      const {name, adiction, job, job2, tendency, gift, dose, priceless} = this.state;

      return (
         <div className="about-me">
            <div className="img-container-aboutme">
               <Link className="link-goback" to="/">
                Volver
               </Link>
               <a href="https://www.linkedin.com/in/elisabet-alcorta-barbe/" target="_blank" rel="noopener noreferrer" className="photo-link">  
                  <img className="eli-photo" src="/eli.jpg" alt="Eli" title="foto de Eli"/>
               </a>
            </div>
            <div className="text-container">
               <p>Hola, bienvenida a mi portfolio.</p>
               <br/>
               <p>Me llamo <span className="change">{name}</span> y soy desarrolladora front-end junior.</p>
               <br/>
               <p>Me divierte mucho trabajar con <strong>React</strong> y <strong>JavaScript</strong>, y soy adicta a <span className="change">{adiction}</span>. Además, disfruto del diseño y la maquetación y me estoy haciendo muy buena amiga del <strong>HTML</strong>, <strong>CSS</strong> y <strong>SASS</strong>.</p> 
               <br/>
               <p>Antes de dedicarme al <strong>desarrollo front-end</strong>, trabajaba en el mundo <span className="change">{job}</span>. Y también he sido <span className="change">{job2}</span>. Por ello, me gusta decir que he cambiado las lenguas por el lenguaje universal de la programación.</p>
               <br/>
               <p>A pesar de tender <span className="change">{tendency}</span>, tengo el don de <span className="change">{gift}</span> y abordo cada nuevo proyecto con altas dosis de <span className="change">{dose}</span>. Aunque trabajo mucho de manera independiente y en remoto, opino que el trabajo presencial en equipo es <span className="change">{priceless}</span>.</p>
               <br/>
               <p>Si todavía tienes curiosidad, puedes echar un vistazo a <strong><a href="https://pdfhost.io/v/k.yppwFT._CV_Elisabet_Alcorta_desarrolladora_front_endpdf.pdf" rel="noopener noreferrer" target="_blank">mi CV</a></strong>.</p>
               <br/>
               <p>Y si no te gusta mi historia, tengo <button type="button" className="button" onClick={this.changeBio}>otra historia</button> </p>
            </div>
         </div>
      )
   }
}
         
export default AboutMe;