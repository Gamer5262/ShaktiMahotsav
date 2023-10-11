import { useState } from 'react'
import './Faq.css'

function Faq() {
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    function toggleQ1() {
        setQ1(!q1);
        setQ2(false);
    }
    function toggleQ2() {
        setQ1(false);
        setQ2(!q2);
    }
    return (
        <div className='container-faq' >
            <h4 style={{ fontFamily: "Signika Negative, sans-serif" }}>FAQ</h4>
                <div className='container-questions'>
                    <div className='questions'>
                        <div className='question' onClick={toggleQ1}>
                            <h5>Where and how to buy tickets for ODI match? </h5>
                        {!q1 && <h5>+</h5>}
                        {q1 && <h5>-</h5>}
                        </div>
                        {q1 && <div className='answer'>
                            Registration desk will be opened near flag pole on 13th and 14th oct. You can buy your tickets there
                        </div>}
                    </div>
                    <div className='questions'>
                        <div className='question' onClick={toggleQ2}>
                            <h5>How to register for discipline committee/ Lalitha sahasranama/ decor team/ volunteers/ garba and dandiya ? </h5>
                        {!q2 && <h5>+</h5>}
                        {q2 && <h5>-</h5>}
                        </div>
                        {q2 && <div className='answer'>
                            In the TEAM section, there is a register button to join the team. There you can register and any of the mentioned event
                        </div>}
                    </div>
                </div>
        </div>
  )
}

export default Faq
