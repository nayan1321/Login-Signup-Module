import React from "react";

const Header = () => {
   const fixedMenu = {
      position: "sticky",
      height: "70px",
      margin: "0px 0px 30px 0px",
      paddingTop: "1.5%",
      fontWidth: "bold",
   };
   return (
      <div className="ui fixed menu" style={fixedMenu}>
         <div className="ui container center">
            <h2>Contact Manger</h2>
         </div>
      </div>
   );
};

export default Header;
