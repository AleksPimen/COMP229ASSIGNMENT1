import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Aleksandr Pimenov</span> 
          <br/>Website Designer</span>
          <Link to="/about"><button className="WebButtons">About Me</button></Link>
          <br />
          <br />
          <br />
          <Link to="/contact"><button className="WebButtons">Contact Me</button></Link>
          <p className="introPara">My expertise lies in designing web pages that are both attractive and easy to use. I have a background in web development and graphic design, and I can create websites that suit different needs and preferences.</p>
 
          
          </div>
          
          
     </section>
    

     </>
     }
     