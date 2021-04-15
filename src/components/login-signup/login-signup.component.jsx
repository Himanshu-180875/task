import React, { useState } from 'react';
function SignIn(){

    const [registerUsername, setRegisterUsername]= useState("");
    const [registerPassword, setRegisterPassword]= useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword]= useState("");
    const [LoginUsername, setLoginUsername]= useState("");
    const [LoginPassword, setLoginPassword]= useState("");
    const login = ()=> {};
    const register= () => {};
    return (  
    <div>
    
    <center> <h1> Login </h1> </center>   
    <form>  
        <div class="container">   
            <label>Username : </label>   
            <input  placeholder="Enter Username" onChange ={e=>setLoginUsername(e.target.value)} />  
            <label>Password : </label>   
            <input  placeholder="Enter Password" onChange ={e=>setLoginPassword(e.target.value)} />  
            <button onClick={login}>Login</button>   
        </div>   
    </form> 
    
    
    <div>
    
    <center> <h1> Register </h1> </center>   
    <form>  
        <div class="container">   
            <label>Username : </label>   
            <input placeholder="Enter Username" onChange ={e=>setRegisterUsername(e.target.value)} />  
            <label>Password : </label>   
            <input  placeholder="Enter Password" onChange ={e=>setRegisterPassword(e.target.value)} />  
            <label>Confirm Password : </label>   
            <input  placeholder="Confirm Password" onChange ={e=>setRegisterConfirmPassword(e.target.value)}/>  
            <button onClick={register}>Register</button>   
        </div>   
    </form>     
    </div>
    </div>

    )  
    
};

export default SignIn;