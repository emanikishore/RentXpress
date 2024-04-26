import "./index.css"
import {Link} from "react-router-dom"

const CarItem = (props) => {
    const {eachCar} = props
    const {id,image,make,fuelType,model} = eachCar

    return(
        
        <Link to = {`/cars/${id}`} style={{ textDecoration: 'none' }} >
            <li className="car-list">
                <img src = {image} alt = "car-image" className="car-image" />
                <div className="caritem-names-container">
                    <div className="car-make-model-container">
                        <h3 className="car-make">{make}</h3>
                        <p className="car-model">{model}</p>
                    </div>
                    <div>
                        <button className="details-btn" >View Details</button>
                    </div>
                </div>
            </li>
        </Link>
        
    )
}

export default CarItem