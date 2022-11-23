import React, { useReducer } from 'react'
import './hookstyle.css';
import { NavLink } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { incNumber,decNumber } from '../actions/index';

const UseReducerHook = () => {
    const myState = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();
    // const intialData = 0;
    // const reducer = (state, action) => {
    //     if (action.type === "Incr") {
    //         state = state + 1;
    //     }
    //     else if (state > 0 && action.type === "Decr") {
    //         state = state - 1;
    //     }
    console.log(myState);

    //     return state;
    // }
    // // const [myNum, setmyNum] = useState(intialData);
    // const [state, dispatch] = useReducer(reducer, intialData);
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
                <p>Use Reducer Hook</p>
                <br />
                <p>{myState}</p>

                <div className="center_div">
                    {/* <div className="button2" onClick={() => { dispatch({ type: "Incr" }) }}> */}
                    <div className="button2"onClick={()=>dispatch(incNumber())} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Incr
                    </div>
                    {/* <div className="button2" onClick={() => { dispatch({ type: "Decr" }) }}> */}
                    <div className="button2" onClick={()=>dispatch(decNumber())}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Decr
                    </div>
                </div>
            </div>
        </>)
}

export default UseReducerHook