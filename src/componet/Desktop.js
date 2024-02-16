import React ,  { useState }from "react";
import paddy from "../images/paddy.jpg";
import cow from "../images/cow.jpg";
import crop2 from "../images/crop2.jpg";
import farmer from "../images/farmer.jpg";
import rice from "../images/rice.webp";
import farmer2 from "../images/farmer2.jpg";
import logo from "../images/logo.jpg";
// import logo3 from "../images/logo3.png";

  

function Desktop (){
  // const [Sign]=useState();
  // const [HubSpot]=useState();
    return(
  <div>
  <header>           
                  <div className="parent">
                   <h1 className="h1"> Growing a Brighter Futer <br></br>
                      Through Sustainable  
                       </h1>
                       </div>
                     <div className="header-part1">
                       <div className="logo">
                    <img src={logo}alt="img"/>
                  </div>
                  {/* <div className="logo2">
                    <img src={logo3}alt="img"/>
                  </div> */}
                       <div className="bar">    
                  <nav>
                         <ul>
                      <li> <a href="/home">HOME</a></li>
                      <li><a href=""> ABOUT US</a></li>
                      <li><a href="">AQUAPONICS COURSE</a></li>
                       <li><a href="">BLOG</a></li>
                      <li><a href="#">CONTACT US</a></li>
                      </ul>
                  </nav>
                  </div>
                  </div>
                  
                    <section className="agrculture">
                      <img src={paddy} alt="img"/>
                   </section>
  </header>   

   <main>
                      <div className="main-part-2">
                          <div className="crop">  <img src={cow}alt="img"/> 
                          <h2> Wet land farming</h2> <br></br>
                          <p>   Crops grown in this method are wheat, ragi,
                                bajra, moong, gram,  corn, beans, sunflower<br></br>
                                and watermelon.planting crops there <br></br>
                                Wetland farming is done in the land 
                                that is saturated with water.<br></br></p> 
                           </div> 
                         
                          <div className="crop">  <img src={crop2}alt="img"/>
                          <h2>Organic agriculture</h2> <br></br>
                          <p>This farming practice is mainly used by  <br></br>
                              to grow tuber and root crops. Land is   <br></br>
                              clearing a forested area and planting crops  <br></br>
                               When the land is no longer fertile, another    <br></br>
                               land is cleared and the crops are shifted.</p>
                           </div>
                       
                           <div className="crop">   <img src={farmer}alt="img"/> 
                           <h2> Plantation agriculture</h2> <br></br>
                           <p>  Plantation agriculture is an extensive type   <br></br>
                                having large farm size on which one crop is <br></br>
                                This is known as monoculture.  has been  <br></br>
                                maintain the quality of the crop using  <br></br>
                                scientific methods cleared and the crops 

                           </p>
                           </div>
                           
                          <div className="crop">  <img src={rice}alt="img"/> 
                          <h2> Agriculture and Food</h2> <br></br>
                          <p>Agriculture is the art and science of cultivating 
                             the soil, growing  crops and  <br></br>
                             it  includes the preparation of plant<br></br>
                             and animal products for people to use and   <br></br>
                             Agriculture provides most of the world’s.</p>
                          </div>
                      </div>

                      <div className="main-part3">
                        <div className="food">
                          <img src={farmer2}alt="img"/>
                        </div>
                        <div>
                          <h1>
                          <span className="span"> Agriculture </span> 
                          <span className="reforms">reforms</span>
                          </h1>
               <div className="arrows">         
             <p> <i class="fa fa-arrow-right" aria-hidden="true"></i> Budget 2022-23 Webinar
                  e-Compendium of Published Articles on<br></br> Farm Reforms Act 2020 -Hindi & English </p> <br></br>

           <p> <i class="fa fa-arrow-right" aria-hidden="true"></i> Central Sector Scheme of Financing Facility under Agriculture Infrastructure Fund<br></br>
           Clarification regarding CHC as eligible project under Agriculture Infrastructure Fund</p>  <br></br>

            <p>  <i class="fa fa-arrow-right" aria-hidden="true"></i> Standard Operating Procedure (SoP) for release  to State Governments  Monitoring Unit (PMU) <br></br>
              Guidelines of Agriculture Infrastructure Fund in Hindi </p> <br></br>

             <p> <i class="fa fa-arrow-right" aria-hidden="true"></i>   Clarification regarding Interest Subvention in Central Sector under Agriculture Infrastructure Fund
         Model Agriculture Agreement of Banana </p> <br></br>
         
           </div>  
                        </div>

                      </div>
   </main>

   <footer>
    <div className="footer-part">
             <div>
             <nav>
                         <ul>
                      <li> <a href="#">HOME</a></li>
                      <li><a href="#"> ABOUT US</a></li>
                      <li><a href="#">AQUAPONICS COURSE</a></li>
                       <li><a href="#">BLOG</a></li>
                      <li><a href="#">CONTACT US</a></li>
                      </ul>
                  </nav>
             </div>
             <div className="icons">
             <i class="fa fa-facebook-square" aria-hidden="true"></i>
             <i class="fa fa-twitter-square" aria-hidden="true"></i>
             <i class="fa fa-linkedin-square" aria-hidden="true"></i>
             <i class="fa fa-google-plus-square" aria-hidden="true"></i>
             <i class="fa fa-whatsapp" aria-hidden="true"></i>
             </div>
           
      
    </div>
    <div className="footer-last">
             
 <div className="icons-para">
 <p> <i class="fa fa-map-marker" aria-hidden="true"></i> 
    Agriculture & Farmers Welfare | MoA & FW| Government of India, Agriculture, New Delhi, India.  </p> <br></br>
    <p>  <i class="fa fa-phone" aria-hidden="true"> </i>  +5550001112224 </p> <br></br>
    
    <p>  <i class="fa fa-envelope" aria-hidden="true"></i> 
      agriculture151@gmail.com</p>
     </div>
            
             <div>
              <h3 className="h3"> About the agrculture : </h3>
              <p className="para2">
                 Agriculture is the practice of cultivating plants and livestock. <br></br>
                 Agriculture was the key development in the rise of sedentary <br></br>
                  human civilization, whereby farming of domesticated species.
                </p>
             </div>
             </div> 
   </footer>

 </div>
       
               
      

       
    )
}

export default Desktop;























// <div className="plants">
// <img src={crop}alt="img"/>
// <div className="life">
// <h1>Importance of Agriculture in Everyday Life.</h1>
//  <p> <h4>Farm production :<br></br></h4> The latest USDA data on farming and farming income report the U.S. had a little over 2 million.</p> <br></br>
//   <p> <h4> Forestry and fishing activities:<br></br></h4> Agricultural activities include forestry and harvesting fish in water farms or in their natural.</p><br></br>
//   <p> <h4>Manufacturing:<br></br></h4>  Agricultural products contribute to the manufacturing of a huge variety of goods, including food and beverage .</p><br></br>
//   <p><h4>Apparel and food and beverage sales:<br></br></h4> Since agriculture is a business, selling products made from agricultural production is essential. </p><br></br>
//   <p> <h4>Food security:<br></br> </h4>Food security is central to the agricultural industry Sustainable agriculture is a key to fulfilling the United Nations’s Sustainable.</p><br></br>
//   </div>
// </div>

