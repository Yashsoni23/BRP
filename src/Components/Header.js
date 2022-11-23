import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="Navbar">
                <div className="NavItems">
                    <li><Link to='/Restorant' className='link'> Project-1</Link></li>
                    <li><Link to='../Temp' className='link'> Project-2</Link></li>
                    <li><Link to='../UseState' className='link'> Project-3</Link></li>
                    <li><Link to='../UseReducerHook' className='link'> Project-4</Link></li>
                    <li><Link to='../UseEffect' className='link'> Project-5</Link></li>
                </div>
            </div>
            
            
        </>
    )
}

export default Header