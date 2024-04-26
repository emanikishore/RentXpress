import React, { Component } from "react";
import { withRouter } from "react-router-dom"; 
import "./index.css";
class Payment extends Component {
    handleReturnHome = () => {
        this.props.history.push("/"); 
    };
    render() {
        return(
            <div className="booked-card">
                <img src="https://img.freepik.com/free-vector/taxi-app-concept_23-2148484842.jpg?t=st=1712899185~exp=1712902785~hmac=3b2496fc2ec2497dbfbd815ce283149a53ca528ad5fe9b4b46b074cd952fa506&w=996" className="car-booked" alt="car-booked-successfully"/>
                <h1 className="car-booked-head">Car Booked Successfully</h1>
                <button className="rent-btn" onClick={this.handleReturnHome}>Return to Home</button>
            </div>
        );
    }
}
export default withRouter(Payment); 
