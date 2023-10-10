import "./About.css";
import img1 from "../assets/SMwbg_white.png";

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
    <div className='about' id='about'>
      <div className='section-about'>
        <h4>About</h4>
        <div className="content">
        <p>
        Shakti Mahotsav '23 is a 10-day cultural spectacle that will utterly transform our campus into a vibrant mosaic of cultural magnificence, innovation, and unity. This event promises an immersive experience that transcends boundaries and empowers the souls of our Indian heritage Highlighting the devotion and spirituality of self.
           </p>
        <img src={img1} className="logo"></img>
        </div>
        <Button changes={change} />
      </div>
    </div>
  )
}

export default About
