import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router";
const HomePage = ({ user }) => {
   // const history = new useHistory();
   //   const { name, email, password } = setUserLogIn;
   console.log(user);
   return (
      <>
         <div className="homepage">
            <h1>Contact Book </h1>
         </div>
      </>
   );
};
export default HomePage;
