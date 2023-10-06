import './App.css'
import Home from './components/Home'
import About from './components/About';
import Team from './components/Team';
import Error from './Error';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team/*" element={<Team />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
