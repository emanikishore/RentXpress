import { IoCarSportOutline } from "react-icons/io5";
import './index.css'

const About=()=>{
  return(
    <div className='about-app-container'>
      <div>
      <h1 className='about-heading'>About Us</h1>
      <h1 className='welcome-heading'>Welcome to <span className='project-name'>RentXpress</span></h1>
      <p className='about-description'>RentXpress is a highly reliable and trustworthy car rental platform that operates globally, providing customers with access to a wide range of vehicles for rental purposes. With a user-friendly website and a seamless booking process, RentXpress makes it easy for individuals and businesses to rent cars for personal or commercial use.</p>
      <div className='about-sections'>
        <div className='section-container'>
           <div className='section'>
              <IoCarSportOutline  className="car-icon"/>
              <p className='section-para'>Easy & Fast Booking</p>
           </div>
          <div className='section'>
              <IoCarSportOutline  className="car-icon"/>
              <p className='section-para'>Many Pickup Location</p>
        </div>
        </div>
        <div className='section-container'>
           <div className='section'>
              <IoCarSportOutline  className="car-icon"/> 
              <p className='section-para'>Customer Satisfaction</p>
           </div>
          <div className='section'>
              <IoCarSportOutline  className="car-icon"/>
              <p className='section-para'>Detailed Vehicle Information</p>
        </div>
        </div>
        </div>
      </div>
      <div className='image-container'>
        <img src='https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?w=740&t=st=1709287655~exp=1709288255~hmac=a241b2060429a900061de5557acf8e13786218514509464951c3d6ce1ba48c20' className='about-car-image' alt='about-omage'/>
      </div>
    </div>
  )
}

export default About