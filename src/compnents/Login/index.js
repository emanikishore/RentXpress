import React, { Component } from "react";
import {Link,Redirect} from "react-router-dom"
import "./index.css";

class Login extends Component {
    state={username:"",password:"",error:"",loggedIn:false}

    handleLogin = () => {
        // Retrieve user data from localStorage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if provided username and password match any entry
        const user = existingUsers.find(user => user.username === this.state.username && user.password === this.state.password);
        
        if (user) {
            // Set loggedIn to true and navigate to /cars path
            this.setState({ loggedIn: true });
        } else {
            // Set error message for incorrect username or password
            this.setState({ error: 'Invalid username or password' });
            alert("Invalid Username or Password")
        }
    }
    
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/cars"/>
        }
        return (
            <div className="login-container">
                <form className="login-form-container" onSubmit={this.handleLogin}>
                    <h1 className="login-heading">Login</h1>
                    <div className="input-box">
                        <label htmlFor="username">Username*</label> <br />
                        <input className="login-username" id="username" type="text" placeholder="Username" value={this.state.username} onChange={(e)=>this.setState({username:e.target.value})}/>
                        <span className='bx bxs-user'></span>
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">Password*</label> <br />
                        <input className="login-password" id="password" type="password" placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} required />
                        <span className='bx bxs-lock-alt'></span>
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link> </p>
                    </div>
                    <p>{this.state.error}</p>
                </form>
            </div>
        );
    }
}

export default Login;
