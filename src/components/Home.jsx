import { useState , useLayoutEffect, useRef} from 'react'
import Gallery from './Gallery'
import Hero from './Hero'
import Event from './Event'
import Contact from './Contact'
import About from './About'
import Team from './Team'
import Footer from './Footer'
import Form from './Form'
import './Home.css'
import Navbar from './Navbar'
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import FormAbout from './FormAbout';

function Home() {
    const [height, setHeight] = useState(1);
    const elementRef = useRef(null);
    useLayoutEffect(() => {
            const handleResize = () => {
            setHeight(elementRef.current.offsetHeight);
            };
            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
            window.removeEventListener('resize', handleResize);
            }
        }, []);
    const [formactive, setFormactive] = useState(false);
    const [formType, setForm] = useState("");
    function toggleForm() {
        setFormactive(!formactive);
    }
    function toggleFormTypeEvent() {
        setForm("event");
    }
    function toggleFormTypeAbout() {
        setForm("about");
    }
    function chooseForm() {
        if (formType === "about") {
            return <FormAbout change={toggleForm} />
        }
        else {
            return <Form change={toggleForm} />
        }
        
    }

  function displayForm() {
    if (formactive) {
        return (
        <div className='pushup'>
            <div className='darken' style={{ height: { height } }}>
                {chooseForm()}
            </div>
          <div ref={elementRef}>
                <Hero />
                <About formtype = {toggleFormType} />
                <Event change = {toggleForm} />
                <Gallery />
                <Team /> 
                <Contact />
                <Footer />
           </div>
      </div>);
    }
    else {
      return <div className='pushup' ref={elementRef}>
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
  const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
  return (
    <div id='home'>
      <div>
        <Navbar />
        {displayForm()}
      </div>
      <Particles
            className='background'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 150,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fdbc1f",
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 300,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> 
    </div>
  )
}

export default Home
