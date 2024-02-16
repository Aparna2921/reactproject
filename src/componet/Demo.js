import React, { useState }from "react";
import customer from "../images/customer.jpg"

function Demo (){
    const [Sign]=useState();
    const [HubSpot]=useState();
    return(
        <div>

          <header>
         <div className="header-part">
                  <div>
                      <i class="fa fa-microphone" aria-hidden="true"><p>Contact us </p></i> 
           
            
                    </div>
              <div>
                    <i class="fa fa-search" aria-hidden="true"></i>
            
                    <input 
                     type="text" 
                 name={Sign} 
                 value={Sign}
                  placeholder="Sign"
                   ></input>

                    <input 
                  type="text" 
                    name={HubSpot} 
                  value={HubSpot}
                 placeholder="HubSpot"
                  ></input>
             </div>
          </div>
          </header>
          <div className="nav-bar">
            <h1>
               <span className="hub"> Hub</span> <span className="spot">SpOt</span>
            </h1>
            <nav>
                <ul>
                    <li> <a href="#">Software</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Partness</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            </div>

            <main className="main">
                <div className="custmer">
                    <img src={customer}alt="img"/>
                </div>
                <div className="main-part">
                    <h1>
                        Get in Touch
                    </h1>
                    <p>Went to get in touch? we had love to here from you.Here's how  you can reach us.</p>
                </div>

                    <div className="display">
                <div className="first">
          <br></br>      <i class="fa fa-phone" aria-hidden="true"></i><br></br>
                    <h4>
                        Talk to sales<br></br>
                    </h4>
                    <p>
                      interseted in the HubSpOt marketing software?<br></br> just pick up the<br></br>
                      phone to chat with a member of our sales team . <br></br>

                   <br></br> <a href="">+877 066 7853  </a>  
                    </p>
                    
                </div>

                <div className="second">
              <br></br>  <i class="fa fa-comments" aria-hidden="true"></i> <br></br>
                    <h3>
                        Contact custmer support
                    </h3>
                    <p> sometimes we need a littile helps<br></br> from youer froends.<br></br>
                        or a HubSpOt  support rep. <br></br>dont worry...we are here for you...<br></br>
                    </p>
                 <br></br>   <button> Contact Support</button>
                </div>
                </div>
            </main>

        </div>
    )

}

export default Demo;