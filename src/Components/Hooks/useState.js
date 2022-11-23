import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './hookstyle.css';
const UseState = () => {
    const intialData = 0;
    const [myNum, setmyNum] = useState(intialData)
    console.log(myNum);
    console.log(setmyNum);
    return (
        <>
            <div className="Navbar">
                <div className="NavItems">
                    <li><NavLink to='../Restorant' className='link active'> Project-1</NavLink></li>
                    <li><NavLink to='../Temp' className='link'> Project-2</NavLink></li>
                    <li><NavLink to='../UseState' className='link'> Project-3</NavLink></li>
                    <li><NavLink to='../UseReducerHook' className='link'> Project-4</NavLink></li>
                    <li><NavLink to='../UseEffect' className='link'> Project-5</NavLink></li>
                </div>
            </div>
            <div className="outContainer">
            <p>Use State Hook</p>
            <br />
            <p>{myNum}</p>
                <div className="center_div">
                    <div className="button2" onClick={() => { setmyNum(myNum + 1) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Incr
                    </div>
                    <div className="button2" onClick={() => { myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Decr
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseState;