import React from "react";
import {Link} from "react-router-dom"
import "./index.css"; 

const FindCar = () => {
  return (
    <div className="find-car-container">
      <div className="find-car-section">
        <img src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1708992000&semt=ais" className="find-car-image" alt="find-car-image"/>
      </div>
    
      <form className="form">
        <div className="first-part">
          <div className="form-group">
            <input type="text" placeholder="From address" required />
          </div>

          <div className="form-group">
            <input type="text" placeholder="To address" required />
          </div>

          <div className="form-group">
            <input type="date" placeholder="Journey date" required />
          </div>
        </div>

      <div className="second-part">
        <div className="form-group">
          <input
            className="journey-time"
            type="time"
            placeholder="Journey time"
            required
          />
        </div>

        <div className="form-group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </div>

        <div className="form-group">
          <Link to = "/login"><button className="find-car-btn">Find Car</button></Link>
        </div>
        </div>
      </form>
    </div>
  );
};

export default FindCar;
