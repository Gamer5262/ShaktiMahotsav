import "./Links.css"
import { Link } from 'react-router-dom';
function Links() {
  return (
      <div className="container-links">
        <div className="section-links">
            <div className="section_1">
              <h3>About</h3>
              <img
                className="img-links"
                src="./assets/About-us.png"
              />
              <p>
                Learn more about our navaratri celebrations. 
              <br/><br/>
              <Link to="/about"><button className="btn">About</button></Link>
            
              </p>
          </div>
          <div className="line" ></div>
          <div className="section_2">
              <h3>Team</h3>
              <img
                className="img-links"
                src="./assets/Team.png"
              />
              <p>
              Introducing you to our amazing team.
              <br/> <br/> 
            <Link to="/team"><button className="btn">Team</button></Link>
            
              </p>
          </div>
        </div>
      </div>
  )
}

export default Links
