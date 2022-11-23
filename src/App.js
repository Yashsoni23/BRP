import React from 'react'
// import Restorant from './Components/Restorant';
import UseStateForm from './Components/Hooks/UseStateForm';
import UseState from './Components/Hooks/useState';
import UseReducerHook from './Components/Hooks/useReducerHook';
import UseEffect from './Components/Hooks/useEfect';
import Temp from './Components/whether/Temp'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
const App = () => {
  return (
   <>
   {/* <BrowserRouter> */}
    <Routes>
      < Route path="/" element={<Home/> }/>
      {/* < Route path="Restorant" element={<Restorant/>}/> */}
      < Route path="Restorant" element={<UseStateForm/>}/>
      < Route path="Temp" element={<Temp/>}/>
      < Route path="/UseState" element={<UseState/>}/>
      < Route path="/UseReducerHook" element={<UseReducerHook/>}/>
      < Route path="/UseEffect" element={<UseEffect/>}/>
        
    </Routes>
   {/* </BrowserRouter> */}
   
{/* <Temp/> */}
   
   </>
  )
}

export default App