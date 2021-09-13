import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = (props, { user }) => {
   console.log(props.contacts);
   console.log(user);
   const deleteContactHandler = (id) => {
      props.getContactId(id);
   };

   const randerApp = props.contacts.map((contact) => {
      return (
         <ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
         />
      );
   });

   return (
      <>
         <div class="main">
            <h2>
               Contact List
               <Link to="/add" class="main-pad">
                  <button className="ui button blue right">Add Contact</button>
               </Link>
            </h2>
         </div>
         <div className="ui celled list">{randerApp}</div>
      </>
   );
};

export default ContactList;
