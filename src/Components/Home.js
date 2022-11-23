import React from 'react'
import './Header.css'
import Header from './Header';

const Home = () => {
  return (
    <>

    <Header/>
    <section id='Home'>
                <div className="imgContainer">
                    <div className="img">
                        <img src="/images/react-logo-png.png" alt="react logo" />
                    </div>
                    <div className="heading">
                        <h1>Basic Projects With React Js!!</h1>
                        <p className='p1'>I tried Some Diffrent types of Projects
                             for Clear My basic in ReactJs,  
                             Click on the Project Number for view.</p>
                    </div>
                </div>

            </section>
    </>
  )
}

export default Home