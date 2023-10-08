import Gallery from './Gallery'
import Hero from './Hero'
import Event from './Event'
import Contact from './Contact'
import About from './About'
import Team from './Team'
import Footer from './Footer'
import './Home.css'


function Home() {
  return (
    <div id='home'>
      <div className='background'>
      <Hero />
        <About />
        <Event />
        <Gallery />
        <Team /> 
        <Contact />
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home
