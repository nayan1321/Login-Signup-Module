import { React, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Signup from "../Components/Sign_up/Signup";
import AppTask from "../Components/AppTask";
import "./router.css";

const Routers = () => {
   const [user, setUserLogIn] = useState({});
   console.log("use state", user);
   return (
      <>
         <Router>
            <div>
               <ul>
                  {/* <li>
                     <Link to="/">Home</Link>
                  </li> */}
                  <li>
                     <Link to="/login">Log in</Link>
                  </li>
                  <li>
                     <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                     <Link to="/homepage">Log out</Link>
                  </li>
               </ul>

               <Switch>
                  <Route path="/homedemo">
                     {user && user._id ? (
                        <AppTask user={user} />
                     ) : (
                        <Login setUserLogIn={setUserLogIn} />
                     )}
                  </Route>
                  <Route path="/login">
                     <Login setUserLogIn={setUserLogIn} />
                  </Route>
                  <Route path="/signup">
                     <Signup />
                  </Route>
                  <Route path="/">
                     <HomePage user={user} />
                  </Route>
               </Switch>
            </div>
         </Router>
      </>
   );
};

export default Routers;
