import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from "react-router-dom"
import './index.css'

const HomeSlider = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-slide">
          <img src='https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slider-image' />
          <div className="slider-content">
            <h2 className='slide-head'>Explore the Beauty</h2>
            <p className='slide-descp'>Discover amazing destinations and experience unforgettable adventures.</p>
            <Link to="/login"><button>Reserve Now</button></Link>
          </div>
        </div>
        <div className="slider-slide">
          <img src='https://images.unsplash.com/photo-1542228262-3d663b306a53?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slider-image'/>
          <div className="slider-content">
            <h2 className='slide-head'>Escape to Paradise</h2>
            <p className='slide-descp'>Relax on pristine beaches and enjoy the tranquility of nature.</p>
            <Link to="/login"><button>Reserve Now</button></Link>
          </div>
        </div>
        <div className="slider-slide">
          <img src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='slider-image'/>
          <div className="slider-content">
            <h2 className='slide-head'>Discover Adventure</h2>
            <p className='slide-descp'>Embark on thrilling journeys and create unforgettable memories.</p>
            <Link to="/login"><button>Reserve Now</button></Link>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default HomeSlider
