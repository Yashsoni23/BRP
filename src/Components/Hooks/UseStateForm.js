import React, { useState,useEffect,useLayoutEffect,useRef } from 'react'
import './form.css'

// 8 Hooks in this programm 
// 1. usestate
// 2. useeffect
// 3. useEffectLayout
// 4. useREf
// 5. useContext
// 6. useReducer
// 7. usememo - return memoized value
// 8. use callback - return memoized function
// Hook no 7 and 8 are icreases performance of our website
const UseStateForm = () => {
    
//  useLayoutEffect HOOK EXAMPLE 

    const [num,setnum] = useState(0);
    useLayoutEffect(()=>{
        if(num === 0 ){
            setnum(Math.round(num + Math.random()*100));
        }
     },[num]);
    //  useEffect(()=>{
    //     if(num === 0 ){
    //         setnum(Math.round(num + Math.random()*100));
    //     }
    //  },[num]);x
// USE REF HOOK EXAMPLE 
    const count = useRef(0);
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();

    const changeBG=()=>{
        // inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "#82E0AA";
        inputRef2.current.style.backgroundColor = "#123456";
        inputRef3.current.style.backgroundColor = "#0f6131";
        inputRef4.current.style.backgroundColor = "#340f61";
        inputRef5.current.style.backgroundColor = "#ab22a4";
        // inputRef1.current.classList.toggle('demo');
    };
     useEffect(()=>{
        count.current = count.current +1;
    });
    const [ct,setct] = useState("");

    // USE STATE HOOK EXAMPLE 

    const [formData, setFormData] = useState({
        username: "",
        Email: "",
        Password: "",
        Confirm_Password: ""
    })
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    };


    return (
        <>        <div className='form'>
            <div className="row">
                <h3>Name:</h3> <input type="text" className='input' value={formData.username}
                    onChange={handleInput}
                    name='username'
                    ref={inputRef1}
                    
                />
                <button onClick={changeBG}>submit</button>
                <button className='btn' onClick={()=>setnum(0)}>Random Number</button>
            </div>
            <div className="row">

                <h3>Email:</h3><input type="email" className='input' value={formData.Email}
                    onChange={handleInput}
                    name='Email'
                    ref={inputRef2}
                />
            </div>

            <div className="row">

                <h3>Password:</h3><input type="password" className='input' value={formData.Password}
                    onChange={handleInput}
                    name='Password'
                    ref={inputRef3}
                />
            </div>

            <div className="row">

                <h3>Confirm-Password:</h3><input type="password" className='input' value={formData.Confirm_Password}
                    onChange={handleInput}
                    name='Confirm_Password'
                    ref={inputRef4}
                />
            </div>
            <p className='p'>{`My name is ${formData.username}and email is ${formData.Email}`}</p>
            <div className="row">

                <h3>Confirm-Password:</h3><input type="password" className='input' value={ct}
                    onChange={(e)=>{setct(e.target.value)}}
                    
                    name='Confirm_Password'
                    ref={inputRef5}

                />
            </div>
            <p className='p'>{`Random num is ${num} You Entered number of alphabates is  ${count.current}`}</p>

        </div>


        </>
    )
}

export default UseStateForm