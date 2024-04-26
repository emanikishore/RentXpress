import "./index.css"
import { FaLocationDot } from "react-icons/fa6"

const ServiceItem = (props) => {
    const {eachItem} = props
    const{title,icon,desc} = eachItem

    return (
        <li className="service-card">
            <div className="service-icon-head-container">
                <spam className="service-icon">{icon}</spam>
                <h1 className="services-heading">{title}</h1>
            </div>
            <p className="services-description">{desc}</p>
        </li>
    )
}

export  default ServiceItem