import { React, useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router";
const Login = ({ setUserLogIn }) => {
   const history = useHistory();
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const handleChage = (e) => {
      const { name, value } = e.target;
      setUser({
         ...user,
         [name]: value,
      });
   };

   const login = () => {
      if (user.email === "" || user.password === "") {
         alert("All Fields are Mendtory...");
      } else {
         axios.post("http://localhost:4040/userdb/login", user).then((res) => {
            alert(res.data.data);
            console.log(res.data.data);
            setUserLogIn(res.data.user);
            history.push("/homedemo");
         });
      }
   };

   return (
      <>
         {console.log(user)}
         <div className="login">
            <h1>Log in</h1>

            <input
               type="text"
               name="email"
               value={user.email}
               onChange={handleChage}
               placeholder="Enter Your Email"
            />
            <input
               type="password"
               name="password"
               value={user.password}
               onChange={handleChage}
               placeholder="Enter Your PassWord"
            />
            <div className="button" onClick={login}>
               Login
            </div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/signup")}>
               Sign Up
            </div>
         </div>
      </>
   );
};
export default Login;
