import React from "react";
import user from "../../images/Mario.jpg";
import { Link } from "react-router-dom";
import imgs from "../../images/Mario.jpg";

const ContactDetails = (props) => {
   const { name, email } = props.location.state.contact;
   return (
      <>
         <div className="main">
            <div className="ui card centered">
               <div className="img">
                  <img src={imgs} class="img" alt="mario" />
               </div>
               <div className="content">
                  <div className="header">{name}</div>
                  <div className="discription">{email}</div>
               </div>
            </div>
            <div className="ui center aligned container">
               <Link to="/homedemo">
                  <button className="ui button blue center">
                     Back to Contact List...
                  </button>
               </Link>
            </div>
         </div>
      </>
   );
};

export default ContactDetails;
