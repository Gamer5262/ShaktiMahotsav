import "./About.css";
import img1 from "../assets/about.png";

const Button = ({changes }) => {
  function handleClick() {
    changes();
    window.scrollTo(0, 0);
  }
  return (
    <div className="btn-form" onClick={handleClick}>
      Register
    </div>
  )
};

function About({ change }) {
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
        <div style={{display:"flex", justifyContent:'space-between', alignItems:'center',width:'35vw',marginTop:"30px"}}>
          <h5 style={{fontFamily: "Signika Negative, sans-serif", fontSize:'large'}}> Wanna organise? or Dance? or Lead from the front?<br/> Design stuff? Take part in spiritual recitations?  </h5>
          <Button style={{padding:"20px", fontFamily:"Tilt Neon, cursive"}} changes={change} />
        </div>
        
      </div>
    </div>
  )
}

export default About
