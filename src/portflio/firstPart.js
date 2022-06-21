import React from "react";
 import './FirstPart.css';



//  const FirstPart = () =>{
//      return <div className="first text-light" >
//             <h1 className="place font-weight-bold">Hams Mohamed</h1>
//             <h3>Web Developer & Designer</h3>
//             <button className="btn btn-outline-light pos" >Contact Me</button>
//      </div>
//  };

// export default FirstPart;

 export default class FirstPart extends React.Component{
     constructor()
     {
         super();
         this.state={
             name:"Hams Mohamed",
             jobTitle:"Web Developer & Designer",

         };

     }
     render()
     {
         return(
             <div className="first text-light">
              <h1 className="place font-weight-bold">{this.state.name}</h1>
              <h3>{this.state.jobTitle}</h3>
              <button className="btn btn-outline-light pos">Contact Me</button>
            
             </div>
         )
     }
 }