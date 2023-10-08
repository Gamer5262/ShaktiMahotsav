import { useState } from 'react'
import Gallery from './Gallery'
import Hero from './Hero'
import Event from './Event'
import Contact from './Contact'
import About from './About'
import Team from './Team'
import Footer from './Footer'
import From from './Form'
import './Home.css'

function Home() {
  const [formactive, setFormactive] = useState(false);
  function toggleForm() {
    setFormactive(!formactive);
  }
  function displayForm() {
    if (formactive) {
      return <div>
        <From change = {toggleForm}/>
        <Hero />
        <About />
        <Event change = {toggleForm} />
        <Gallery />
        <Team /> 
        <Contact />
        <Footer/>
      </div>;
    }
    else {
      return <div>
        <Hero />
        <About />
        <Event change={toggleForm} />
        <Gallery />
        <Team /> 
        <Contact />
        <Footer/>
      </div>;
    }

  }
  return (
    <div id='home'>
      <div className='background'>
        {displayForm()}
      </div>
    </div>
  )
}

export default Home
