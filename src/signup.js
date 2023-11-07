import React from "react";

export default function SignUp(){
    return(
        <div class="login">
            <i class="fa-solid fa-xmark"></i>
            <div class="text">
                <h3>Create Account</h3>
                <h4>Already have an account <a href="#">Sign in</a></h4>
            </div>
            <div class="information-input">
                <input type="text" placeholder="Username"></input>
                <input type="email" placeholder="Email Address"></input>
                <input type="password" placeholder="Password"></input>
                <div class="verification">
                <div class="remember">
                <div class="box">
                <i class="fa-solid fa-check"></i>
                </div>
                <h5>Sign-up for our weekly newsletter </h5>
                </div> 
                </div>
                <button class="loginButton">Continue</button>
            </div>
        </div>
    )
}