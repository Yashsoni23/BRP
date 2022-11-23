import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
import "./style.css"

const uniqueList = [ ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All",];
const Restorant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setmenuList] = useState(uniqueList);
    console.log(setmenuList);
    const filterItem = (category)=>{
        if(category === "All"){
            setMenuData(Menu);
            return
        }
        const updatedList = Menu.filter((curElem)=>{
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }

  return (
   <>
   <div className="Navbar">
                <div className="NavItems">
                    <li><NavLink to='./Restorant' className='link'> Project-1</NavLink></li>
                    <li><NavLink to='../Temp' className='link'> Project-2</NavLink></li>
                    <li><NavLink to='../UseState' className='link'> Project-3</NavLink></li>
                    <li><NavLink to='../UseReducerHook' className='link'> Project-4</NavLink></li>
                    <li><NavLink to='../UseEffect' className='link'> Project-5</NavLink></li>
                </div>
            </div>
   <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
   </>
  )
}

export default Restorant