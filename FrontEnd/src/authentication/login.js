import React from "react";
import { Link } from "react-router-dom";
export default function Login(){
    const [dataForm,setDataForm]=React.useState({
        email:"", password:"", remember:false
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = dataForm;
    
        fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error('The user does not exist , Please Check your Credentials ');
                });
            }
            console.log(response)
            return response.json();
        })
        .then(data => {
            window.location.href = '/';
            window.alert("Login up Successful");
        })
        .catch(error => {
            console.error('Error during fetch:', error);
            window.alert(error.message); 
        });
    }
    
    function HandleChange(event){
        const {value,name,type,checked} =event.target
        setDataForm ( prevFormData=> {
            return {
                    ...prevFormData,
                    [name]: type === "checkbox" ? checked : value 
                }
            
        })
    }
    
    return(
        <div className="identification">
             <div class="container">
        <form className="login-in" onSubmit={handleSubmit}>
            <i class="fa-solid fa-xmark"></i>
            <div class="text">
                <h3>Welcome Back</h3>
                <h4>Need an account? <Link to="/signup">Sign Up</Link> </h4>
            </div>
            <div class="information-input">
                <input 
                type="email" 
                name="email"
                placeholder="Email Address"
                onChange={HandleChange}
                value={
                    dataForm.email
                }></input>
                <input type="password" placeholder="Password" name="password"
                value={
                    dataForm.password
                }
                onChange={HandleChange}></input>
                <div class="verification">
                    <div class="remember">
                    <input type="checkbox" id="remember" name="remember" class="check" checked={dataForm.remember} onChange={HandleChange}/>
                    <label htmlFor="remember" class="linkto"> Remember Me </label>
                    </div>
                <h5 class="forgot"><a href="singup">Forgot your Password?</a></h5>
                </div>
                <button type="submit" class="loginButton"><Link to="/">Log in</Link></button>
            </div>
        </form>
        </div>
        </div>
    )
}