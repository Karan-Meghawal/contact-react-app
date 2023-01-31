import React from "react";
import './styles.css'
import Details from "./Details";
const Card =(props) =>{

    return(
        <div className="card">
          
           <div className="top">
           <p>{props.id}</p>
            <h2 className="name">Name:{props.Name}</h2>
            <img className="circle-img" src={props.img} />

           </div>
           <div className="bottom">
            <Details  detailinfo = {props.email} />
            <Details  detailinfo = {props.contact} />

          

           </div>
        </div>
    )
}

export default Card