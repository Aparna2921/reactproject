import React, { useState } from "react";

import keerthi from  "../images/keerthi.jpg"

function Login (){
    const [Name ,]=useState();
    const [Passward ,]=useState();
    return(  
            <div className="login">
             <h1>  <span className="user">  User</span>
                 <span className="lgin">  Login</span> 
                 <span className="page"> Page</span> </h1> 
            <div className="keerthi"><img src={keerthi}alt="img"/> </div> 
             <div className="name">
           <br></br>  Name:<input 
            type="text" 
            name={Name} 
            value={Name}
            placeholder="enter the name"
            ></input><br></br>

            Passward:<input
            type="text"
            passward={Passward}
            value={Passward}
            placeholder="enter the passward"
            ></input>   <br></br>
            <button type="Submit"> Submit</button>        
        </div>
        </div>
    )
}
export default Login;