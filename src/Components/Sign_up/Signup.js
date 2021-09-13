import { React, useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
   const history = useHistory();

   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      reEnterPassword: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name]: value,
      });
   };

   const register = () => {
      const { name, email, password, reEnterPassword } = user;

      if (name && email && password && password === reEnterPassword) {
         axios
            .post("http://localhost:4040/userdb/signup", user)
            .then((res) => alert(res.data.data));
      } else {
         alert("All Fields are Mandtory...");
      }
   };
   return (
      <>
         {console.log(user)}
         <div className="signup">
            <h1>Sign Up</h1>
            <input
               type="text"
               name="name"
               value={user.name}
               onChange={handleChange}
               placeholder=" Your Name"
            />
            <input
               type="text"
               name="email"
               value={user.email}
               onChange={handleChange}
               placeholder="Enter Your Email"
            />
            <input
               type="password"
               name="password"
               value={user.password}
               onChange={handleChange}
               placeholder=" Your PassWord"
            />
            <input
               type="password"
               name="reEnterPassword"
               value={user.reEnterPassword}
               onChange={handleChange}
               placeholder="Re-Enter Your Password"
            />
            <div className="button" onClick={register}>
               Sign Up
            </div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/login")}>
               Login
            </div>
         </div>
      </>
   );
};
export default Signup;
