import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Card from './Card';
import Projects from './Projects';
import Contact from './Contact';
import About from './About';
const Home = ({ imageSrc, altText, paragraphText }) => {
  return (
   <>
      
    

   {/* Section header */}
   <div className="container-fluid p-4  insidecontainer"  >

      <div className="row">
        {/* Left Side: Paragraph */}
        <div className="col-md-6 mt-5">
          <h1 >WE ARE <span className='prof'> PROFESSIONAL</span></h1>
          <h1><span className='web'>WEB DEVELOPER</span></h1>
          <p className='fs-4 mt-5 '>{paragraphText}</p>
          <Link  to="/about">
          <button type="button" class="btn1 fs-5">More Explore</button>
              </Link>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6">
          <img src={imageSrc} alt={altText} className="img-fluid animated-image mt-3" />
        </div>
      </div>
    </div>
    {/* SYG WAVE */}

{/* Services */}

<div className="conatiner-fluid p-3" style={{   backgroundImage: "url(" + "images/ps1.png" + ")",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
 }}>
  <Card/>
</div>
{/* Projects */}
<div className="container-fluid pt-4 pb-5 " style={{ backgroundColor:"#FAEED1" }} >
  <Projects/>
</div>
  {/* Contact US */}
  <div className="container-fluid" >
    <Contact/>
  </div>

  {/* ABout US */}

  <div className="container-fluid">
<About/>
  </div>
{/* Foooter */}


<div class="container-fluid" >
    <div class="row mt-5">
      <div class="col-12">
        <footer class="bg-dark text-light text-center py-3">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>

   </>
  )
}

export default Home;
