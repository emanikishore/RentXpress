import React, { Component } from "react";
import "./index.css";

class SignUp extends Component {
    state={username:"",password:""}

    // handleSignUp=()=>{
    //     localStorage.setItem('username',this.state.username);
    //     localStorage.setItem('password',this.state.password);
    //     alert("Sign up successful")
    // }

    handleSignUp = () => {
        // Retrieve existing user data from localStorage or initialize an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        // Add new user to the array
        const newUser = {
            username: this.state.username,
            password: this.state.password
        };
        existingUsers.push(newUser);
        
        // Save updated user data back to localStorage
        localStorage.setItem('users', JSON.stringify(existingUsers));
    
        alert("Sign up successful");
    }


    render() {
        return (
            <div className="signup-container">
                
                <form className="signup-form-container" onSubmit={this.handleSignUp}>
                    <div className="head-image-container">
                        <h1 className="signup-heading">Registration</h1>
                        {/* <img src="https://i.ibb.co/wpL6FxV/Design-a-logo-for-Rent-Xpress-a-car-rental-proje-2-removebg-preview.png" className="logo" alt="logo" /> */}
                    </div>
                    
                    <div className="input-box">
                        <div className="input-field">
                            <label htmlFor="full-name">Full Name*</label> <br />
                            <input className="full-name" id="full-name" type="text" placeholder="Full Name" required />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-field">
                            <label htmlFor="username">Username*</label><br />
                            <input className="username" id="username" type="text" placeholder="Username"  value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})} required />
                            <i className='bx bxs-user'></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field">
                            <label htmlFor="email">Email*</label><br />
                            <input className="email" id="email" type="email" placeholder="Email" required />
                            <i className='bx bxs-envelope'></i>
                        </div>
                        <div className="input-field">
                            <label htmlFor="phone-number">Phone*</label><br />
                            <input className="phone-number" id="phone-number" type="number" placeholder="Phone Number" required />
                            <i className='bx bxs-phone'></i>
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-field">
                            <label htmlFor="password">Password*</label><br />
                            <input className="password" id="password" type="password" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <div className="input-field">
                            <label htmlFor="confirm-password">Confirm Password*</label><br />
                            <input className="confirm-password" id="confirm-password" type="password" placeholder="Confirm Password" required />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                    </div>

                    {/* <label><input type="checkbox" />I hereby declare that the above information provided is true and correct</label> */}

                    <button type="submit" className="signup-btn">Register</button>
                </form>
            </div>
        );
    }
}

export default SignUp;
