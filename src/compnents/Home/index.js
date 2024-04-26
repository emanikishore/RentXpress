import {Component} from "react"
import Header from "../Header"
import HomeSlider from "../HomeSlider"
import FindCar from "../FindCar"
import About from "../About"
import Services from "../Services"
import BecomeDriver from "../BecomeDriver"
import Testimonial from "../Testimonial"
import Footer from "../Footer"

class Home extends Component{      
    render() {
        return(
            <div>
                <Header />
                <HomeSlider />
                <FindCar />
                <About />
                <Services />
                <BecomeDriver />
                <Testimonial />
                <Footer/>

            </div>
        )
    }
}

export default Home