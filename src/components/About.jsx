import "./About.css";
import img1 from "../assets/about.png";



function About() {
  return (
    <div style={{fontFamily: "Sacremento, sans-serif"}} className='about' id='about'>
      <div className='section-about'>
        <h4 style={{fontFamily: "Signika Negative, sans-serif"}}>About</h4>
        <div className="content">
          <p className="para">
            Navaratri is a major Hindu festival lasting nine nights and ten days, celebrating the goddess Durga in her various forms. It signifies the victory of good over evil and includes fasting, prayer, and dance performances like Garba and Dandiya.
            </p>
          <img src={img1} className="logo"></img>
        </div>
        
        
      </div>
    </div>
  )
}

export default About
