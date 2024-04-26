import { Component } from "react";
import {Link} from "react-router-dom"
import carData from "../../assets/data/carData";
import Logout from "../Logout";
import "./index.css"

class CarItemDetails extends Component {
    state = {
        carDetails: {} // Initialize as an empty object instead of an empty array
    }

    componentDidMount() {
        this.getCarItemDetails();
    }

    getCarItemDetails = async () => {
        const { match } = this.props;
        const { params } = match;
        const { id } = params;

        const singleCarItem = carData.find(eachCar => eachCar.id === parseInt(id)); // Use find instead of filter
        this.setState({ carDetails: singleCarItem });
    } 

    render() {
        const { carDetails } = this.state;

        return (
            <>
                <Logout />
                <div className="rental-container">
                    <div className="car-details-container">
                        <div className="car-image-container">
                            <img src={carDetails.image} className="car-detail-image" alt="Car" /> {/* Added alt attribute */}
                        </div>
                        <div className="car-details">
                            <h1 className="car-make-heading">{carDetails.make}</h1>
                            <p><span className="car-detail-span">Model :</span> {carDetails.model}</p>
                            <p><span className="car-detail-span">Features :</span>  {carDetails.features && carDetails.features.join(', ')}</p>
                            <p><span className="car-detail-span">Fuel Type :</span> {carDetails.fuelType}</p>
                            <p><span className="car-detail-span">Color :</span> {carDetails.color}</p>
                            <p><span className="car-detail-span">Engine :</span> {carDetails.engine}</p>
                            <p><span className="car-detail-span">Year :</span> {carDetails.year}</p>
                            <p><span className="car-detail-span">Horse Power :</span> {carDetails.horsepower} fps</p>
                            <p><span className="car-detail-span">Price : </span>{carDetails.price}/-</p>
                            <p><span className="car-detail-span">Transmission :</span> {carDetails.transmission}</p>
                            <Link to={`/rent/${carDetails.id}`}>
                                <button className="car-details-btn">Rent This Car</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </>
            
        );
    }
}

export default CarItemDetails;
