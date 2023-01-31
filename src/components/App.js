import React from "react";
import Card from "./Card"
import Contact from './Contact'

function createCard(contact){
    return(
        <Card 
        key={contact.id}
        name={contact.name}
        img={contact.img}
        contact={contact.contact}
        email={contact.email}
         />

        
    )
        
}
const App = () => {
    
    return (
        <div>
            <h1 className="heading">My contacts</h1>
            {Contact.map(createCard)}
            {/* <Card img={Contact[0].img} Name={Contact[0].name} contact={Contact[0].contact} email={Contact[0].email} />
            <Card img={Contact[1].img} Name={Contact[1].name} contact={Contact[1].contact} email={Contact[1].email} />
            <Card img={Contact[2].img} Name={Contact[2].name} contact={Contact[2].contact} email={Contact[2].email} /> */}


        </div>
    )
}


export default App