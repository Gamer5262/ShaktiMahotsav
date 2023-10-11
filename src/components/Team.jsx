import { set } from 'react-hook-form';
import './Team.css'
import { useState } from 'react';

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

const Team = ({ change }) => {
    const [t1, setT1] = useState(false);
    const [t2, setT2] = useState(false);
    const [t3, setT3] = useState(false);
    const [t4, setT4] = useState(false);
    const [t5, setT5] = useState(false);
    const [t6, setT6] = useState(false);
    function toggleT1() {
        setT1(!t1);
        setT2(false);
        setT3(false);
        setT4(false);
        setT5(false);
        setT6(false);
    }
    function toggleT2() {
        setT1(false);
        setT2(!t2);
        setT3(false);
        setT4(false);
        setT5(false);
        setT6(false);
    }
    function toggleT3() {
        setT1(false);
        setT2(false);
      setT3(!t3);
      setT4(false);
      setT5(false);
      setT6(false);
  }
  function toggleT4() {
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(!t4);
    setT5(false);
    setT6(false);
  }
  function toggleT5() {
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(!t5);
    setT6(false);
  }
  function toggleT6() {
    setT1(false);
    setT2(false);
    setT3(false);
    setT4(false);
    setT5(false);
    setT6(!t6);
  }

  return (
    <div className="container-team" id='team'>
      <div className="section-team">
        <h4 style={{ fontFamily: "Signika Negative, sans-serif" }}>Meet our Fabulous Team</h4>
        <div className='row-team'>  
        <div className=' teams'>
            <div className='question' onClick={toggleT1}>
                <h5>Finance Team </h5>
                {!t1 && <h5>+</h5>}
                {t1 && <h5>-</h5>}
            </div>
            {t1 && <div className='answer'>
                <h6>N Sai Bharadwaj</h6>
                <h6>Kumoulica</h6>
                <h6>Divij</h6>
                <h6>Anushka nambiar</h6>
                <h6>Dhyana Sai Gudivada </h6>
                <h6>Snehitha gorantla</h6>
                <h6>Yash Upadyay</h6>
                <h6>Spoorthikeya</h6>
                <h6>Sri Varshini</h6>
                <h6>Vineeth</h6>
            </div>}
          </div>
          <div >
            <div className='question' onClick={toggleT2}>
              <h5>Technical Team</h5>
              {!t2 && <h5>+</h5>}
              {t2 && <h5>-</h5>}
            </div>
            {t2 && <div className='answer'>
              <h6>Mokshagna Bhuvan</h6>
              <h6>Kapil </h6>
              <h6>Yuvaraj </h6>
              <h6>Suriya kumar</h6>
              <h6>Dhivijit </h6>
              <h6>Pranish </h6>
              <h6>Harishkar</h6>
              <h6>Priyanshu Aggarwal</h6>
              <h6>Tarun R G</h6>
              <h6>Manoj Sri Sai</h6>
            </div>}
        </div>
        <div >
            <div className='question' onClick={toggleT3}>
                <h5>Food Department</h5>
            {!t3 && <h5>+</h5>}
            {t3 && <h5>-</h5>}
            </div>
            {t3 && <div className='answer'>
                <h6>Shiva Sai</h6>
              <h6>Abhiram </h6>
              <h6>Abhishek Sharma</h6>
              <h6>Aditya</h6>
              <h6>Gaurav</h6>
              <h6>Kritik</h6>
            </div>}
          </div>
          <div className='questions'>
            <div className='question' onClick={toggleT4}>
                <h5>Decor Team </h5>
                {!t4 && <h5>+</h5>}
                {t4 && <h5>-</h5>}
            </div>
            {t4 && <div className='answer'>
                <h6>Sahithi Sastry</h6>
              <h6>Mahima Singh</h6>
              <h6>Manikanta Reddy</h6>
              <h6>Sai Sarath </h6>
              <h6>Tejaswari </h6>
              <h6>Pravine Mukesh </h6>
              <h6>Nikhitha</h6>
              <h6>Anshitha</h6>
            </div>}
          </div>
          <div className='questions'>
            <div className='question' onClick={toggleT5}>
                <h5>Mandampam Team</h5>
                {!t5 && <h5>+</h5>}
                {t5 && <h5>-</h5>}
            </div>
            {t5 && <div className='answer'>
                <h6>A Padmasini</h6>
              <h6>Giris Teja </h6>
              <h6>Tanmay</h6>
              <h6>Sohith </h6>
              <h6>Gnaneswar</h6>
              <h6>keerthi</h6>
            </div>}
          </div>
          <div className='questions'>
            <div className='question' onClick={toggleT6}>
                <h5>Events Team</h5>
                {!t6 && <h5>+</h5>}
                {t6 && <h5>-</h5>}
            </div>
            {t6 && <div className='answer'>
              <h6>G Abhishek </h6>
              <h6>E Karun Kumar </h6>
              <h6>Priyanka Varma </h6>
              <h6>Naga Jyothi </h6>
              <h6>Nandan</h6>
              <h6>Sai Sharan</h6>
              <h6>Lakshmikanth</h6>
            </div>}
        </div>
        </div>
        <div style={{display:"flex", justifyContent:'space-between', alignItems:'center',width:'35vw',marginTop:"30px"}}>
          <h5 style={{fontFamily: "Signika Negative, sans-serif", fontSize:'large'}}> Wanna organise? or Dance? or Lead from the front?<br/> Design stuff? Take part in spiritual recitations?  </h5>
          <Button style={{padding:"20px", fontFamily:"Tilt Neon, cursive"}} changes={change} />
        </div>
      </div>
    </div>
  )
}

export default Team
