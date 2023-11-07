import React from "react";

export default function Login(){
    return(
        <div class="login">
            <i class="fa-solid fa-xmark"></i>
            <div class="text">
                <h3>Welcome Back</h3>
                <h4>Need an account? <a href="#">Sign Up</a></h4>
            </div>
            <div class="information-input">
                <input type="email" placeholder="Email Address"></input>
                <input type="password" placeholder="Password"></input>
                <div class="verification">
                   <div class="remember">
                <div class="box">
                <i class="fa-solid fa-check"></i>
                </div>
                <h5>Remember me </h5>
                </div> 
                <h5 class="forgot">Forgot your Password?</h5>
                </div>
                <button class="loginButton">LOG IN</button>
            </div>
        </div>
    )
}