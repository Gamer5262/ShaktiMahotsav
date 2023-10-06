import Gallery from './Gallery'
import Hero from './Hero'
import Event from './Event'
import Navbar from './Navbar'
import Links from './Links'
import Form from './Form'
import  { useState } from 'react';
import Contact from './Contact'

function Home() {
    const [Registering, setRegister] = useState(false);

  function isRegistering () {
    setRegister(true);
  }

  const logic = () => {
  if (Registering === false) {
    return (<div>
        <Hero />
        <Links/>
        <Gallery />
        <Event />
        <Contact />
    </div>);
  }
  else {
    return (<div>
      <Form />
    </div>);
  }
};
  return (
    <div>
        <Navbar change = {isRegistering} />
        {logic()}
    </div>
  )
}

export default Home
