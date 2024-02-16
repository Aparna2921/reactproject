import React from "react";
import farmer4 from "../images/farmer4.jpg";
import soil from "../images/soil.jpg";
import monsoon from "../images/monsoon.jpg";
import organic from "../images/organic.jpg";
import foods from "../images/foods.jpg";



function Home(){
    return(
        <div className="home">
            <h1 className="h1"> Current situtions of Agriculture</h1>
             <div>
                 <div className="farmerimg"> 
                    <img src={farmer4}alt="img"/>
                  </div>
            <div className="features">
              <h3 className="h3">
              Features of Agriculture
              </h3>
            </div>
           
            <div className="mainparts">
                <div>
            <div className="round"> 
            <img src={soil}alt="img"/> 
            <div className="mainparts2">
             <h4>(i) Source of livelihood:</h4> 
             <p> Agriculture is the main occupation. It provides employment to nearly 61% persons of total population.
              It contributes 25% to national income.</p>   
              </div>
              </div>
            <div className="round"> 
            <img src={monsoon}alt="img"/>
            <div className="mainparts2">
            <p><h4> (ii)Dependence on monsoon:</h4>
          Agriculture in India mainly depends on monsoon. If monsoon is good, the production
         monsoon is less than average then the crops fail.
          Sometimes floods play havoc with our crops </p>
            </div>
            </div>

            <div className="round">
              <img src={organic}alt="img"/>
              <div className="mainparts2">
     <p><h4> (iii)Low Agricultural production:</h4> 
     Agricultural production is low in India. India produces 27 Qtls.
      wheat per hectare. France produces 71.2 Qtls per hectare and
       Britain 80 Qtls  Average annual productivity of an
        agricultural in India, 973  Norway and 2408 dollars in USA.</p>
            </div>
            </div>
            <div className="round">
               <img src={foods}alt="img"/>
               <div className="mainparts2">
            <p> <h4>(iv)Dominance of food crops:</h4>
     75% of the cultivated area is under food crops like Wheat, Rice  
     and Bajra, while 25% of cultivated area is under commercial crops.
      This pattern is cause of backward agriculture. </p>
            </div>
            </div>
            </div>

     </div>
     </div>
     <div className="aboutus">
        <h2> About us</h2>

        <p>
          Iam Aparna , <br></br>
          Farmers have great importance in our society. They are the ones who provide us food to eat. Since every person needs proper food for their living, so they are a necessity in society. There are different types of farmers. And they all have equal significance. First are the farmers who grow a crop like wheat, barley, rice, etc.

        </p>
          <div className="sign">
          <p className="sign1"> Signiture,</p>
           <p className="sign2"> N.Aparna .</p>
           </div>  
          
     </div>
     </div>



       
    );
}

export default Home;