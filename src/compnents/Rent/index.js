import { Component } from "react";
import {Link} from "react-router-dom"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import carData from "../../assets/data/carData";
import "./index.css"
import Logout from "../Logout";

class Rent extends Component{

    state = {
        carDetail:[],
        pickUpLocation:"Car Rental Service",
        pickUpDate:"",
        pickUpTime:"",
        dropOffLocation:"Car Rental Service",
        dropOffDate:"",
        dropOffTime:""
    }       

    constructor(props) {
        super(props);
        this.form = React.createRef();
    }


    componentDidMount() {
        this.getCarDetail()
    }

    getCarDetail = async() => {
        const {match} = this.props 
        const {params} = match
        const {id} = params


        const singleCarItem = carData.find(eachCar => eachCar.id === parseInt(id)); // Use find instead of filter
        this.setState({ carDetail: singleCarItem });
    }
    
    changePickUpLocation = (event) => {
        this.setState({pickUpLocation:event.target.value})
    }

    changeDropOffLocation = (event) => {
        this.setState({dropOffLocation:event.target.value})
    }

    changePickUpDate = (event) => {
        this.setState({pickUpDate:event.target.value})
    }

    changePickUpTime = (event) => {
        this.setState({pickUpTime:event.target.value})
    }

    changeDropOffDate = (event) => {
        this.setState({dropOffDate:event.target.value})
    }

    changeDropOffTime = (event) => {
        this.setState({dropOffTime:event.target.value})
    }

    

    calculatePrice = () => {
        const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = this.state;
        const { price } = this.state.carDetail;
    
        // Combine date and time for pick-up and drop-off
        const pickUpDateTime = new Date(`${pickUpDate}T${pickUpTime}`);
        const dropOffDateTime = new Date(`${dropOffDate}T${dropOffTime}`);
    
        // Calculate the difference in milliseconds
        const timeDifference = dropOffDateTime - pickUpDateTime;
    
        // Convert milliseconds to hours
        const totalHours = timeDifference / (1000 * 60 * 60);
    
        // Calculate the total price based on the hourly rate
        const hourlyRate = price / 24; // Assuming price is the total per day
        const calculatedPrice = hourlyRate * totalHours;
    
        // You can round the calculated price or apply additional logic as needed
        return calculatedPrice.toFixed(2);
    }

    navigateToPayment = () => {
        const { pickUpLocation, pickUpDate, pickUpTime, dropOffLocation, dropOffDate, dropOffTime } = this.state;
    
        // Check if any input field is empty
        if (!pickUpLocation || !pickUpDate || !pickUpTime || !dropOffLocation || !dropOffDate || !dropOffTime) {
            // Show alert if any input field is empty
            alert("Please fill in all fields before proceeding.");
        } else {
            // Proceed with navigation to payment page
            setTimeout(() => {
                const { id } = this.props.match.params;
                this.props.history.push(`/rent/${id}/payment`);
            }, 5000);
        }
    };
    
    sendEmail = event => {
        if(event) {
            event.preventDefault();
        }
        
    
        const { pickUpLocation, pickUpDate, pickUpTime, dropOffLocation, dropOffDate, dropOffTime, carDetail } = this.state;
        const { calculatedPrice } = this.props.location.state || {};
    
        const templateParams = {
          from_pickUpLocation: pickUpLocation,
          from_pickUpDate: pickUpDate,
          from_pickUpTime: pickUpTime,
          from_dropOffLocation: dropOffLocation,
          from_dropOffDate: dropOffDate,
          from_dropOffTime: dropOffTime,
          from_calculatedPrice: calculatedPrice,
          from_carDetail: carDetail
        };
    
        emailjs
          .send('service_9kys6wa', 'template_5q6yb9m', templateParams, 'reP4fXhHM97-oaeGg') // Replace 'user_1234567890' with your user ID
          .then(
            response => {
              console.log('Email sent successfully:', response);
              // Optionally, you can redirect the user to a confirmation page
            },
            error => {
              console.error('Email sending failed:', error);
              // Handle error accordingly
            }
          );
      };
    render() {
        const {carDetail,pickUpLocation,pickUpDate} = this.state
        const {color,engine,features,fuelType,horsepower,id,image,make,model,price,transmission,year} = carDetail
        const calculatedPrice = this.calculatePrice()
        return(
            <>
                <Logout />
                    <div className="rental-container">
                        <div className="car-rent-details">
                            <img src={image} alt="car-img" className="rent-car-image"  />
                            <div className="price-model-container">
                                <p className="car-model1">{model} {make}</p>
                                <p className="car-price1">{price}/- per day</p>
                            </div>
                        </div>
                        <div className="rental-details">
                            <form id="submit-form" onSubmit={this.sendEmail} >
                                <div className="pick-up-container">
                                    <label className="pick-up-location" htmlFor="pick-up-location">Pick-up Location</label>
                                    <select id="pick-up-location" onChange={this.changePickUpLocation} >
                                        <option>RentXpress</option>
                                    </select><br />
                                    <label htmlFor="pick-up-date">Pick-up Date</label>
                                    <input type="date" id="pick-up-date" className="date" onChange={this.changePickUpDate} /><br />
                                    <label htmlFor="pick-up-time">Pick-up Time</label>
                                    <input type="time" id="pick-up-time" className="time" onChange={this.changePickUpTime} /><br />
                                </div>
                                <div className="drop-off-container">
                                    <label className="drop-off-location" htmlFor="drop-off-location">Drop-off Location</label>
                                    <select id="drop-off-location" onChange={this.changeDropOffLocation} >
                                        <option>RentXpress</option>
                                    </select><br />
                                    <label htmlFor="drop-off-date">Drop-off Date</label>
                                    <input type="date" id="drop-off-date" className="date" onChange={this.changeDropOffDate} /><br />
                                    <label htmlFor="drop-off-time">Drop-off Time</label>
                                    <input type="time" id="drop-off-time" className="time" onChange={this.changeDropOffTime} /><br />
                                </div>
                                <div className="price-details-container">
                                    <p>Price : {calculatedPrice}/-</p>
                                    <Link to={{
                                        pathname: `/rent/${id}/payment`,
                                        state: { calculatedPrice: calculatedPrice },
                                    }}>
                                        <button className="rent-btn" type="submit" onClick={this.navigateToPayment}>Pay & Rent Now</button>
                                    </Link>
                                </div>
                              
                            </form>
                        </div>
                
                    </div>
            </>

        )
    }
}
export default Rent
