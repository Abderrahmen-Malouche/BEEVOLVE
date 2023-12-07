import React from "react";

export default function SignUp(){
    const [dataForm,setDataForm]=React.useState({
        username:"",email:"",password:""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = dataForm;
    
        fetch('http://localhost:5000/users/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password
            })
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error('Server error');
                });
            }
            console.log(response)
            return response.json();
        })
        .then(data => {
            window.location.href = '/';
            window.alert("Sign up Successful");
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
        <form className="login-in" id="signup" onSubmit={handleSubmit}>
            <i class="fa-solid fa-xmark"></i>
            <div class="text">
                <h3>Create Account</h3>
                <h4>Alread y have an account <a href="#">Sign in</a></h4>
            </div>
            <div class="information-input">
            <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={dataForm.username}
                        onChange={HandleChange}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={dataForm.email} 
                        onChange={HandleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password" 
                        value={dataForm.password}
                        onChange={HandleChange}
                    />
                <div class="verification">
                    <div>
                <input type="checkbox" id="sign" name="sign" class="check" checked={dataForm.sign} />
                <label htmlFor="sign"> Sign up for the newsletter </label>
                    </div>
                </div>
                <button type="submit" class="loginButton">Continue</button>
            </div>
        </form>
        </div>
        </div>
    )
}