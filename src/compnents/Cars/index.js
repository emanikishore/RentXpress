import { Component } from "react";
import CarItem from "../CarItem";
import carData from "../../assets/data/carData";
import React, { useRef } from "react";
import Logout from "../Logout";

import "./index.css"

class Cars extends Component {

    state = {
        carsList:[]
    }

    render() {
        const {carsList} = this.state
        return(
            <div>
                <Logout />
                        
            <div className="cars-container">
                <ul className="list-of-cars">
                    {carData.map(eachCar => (
                        <CarItem eachCar = {eachCar} key = {eachCar.id} />
                    ))}
                </ul>
            </div>

        </div>
        )
    }
}

export default Cars