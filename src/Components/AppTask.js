import { React, useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App-task.css";
import Header from "./contact-components/Header.jsx";
import AddConatct from "./contact-components/AddContact.jsx";
import ContactList from "./contact-components/ContactList.jsx";
import ContactDetails from "./contact-components/ContactDetails.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function AppTask({ user }) {
   const LOCAL_STORAGE_KEY = "contacts";
   const [contacts, setContacts] = useState([]);
   console.log("app", user);
   const addContactHandler = (contact) => {
      console.log(contact);
      setContacts([...contacts, { id: uuid(), ...contact }]);
   };

   const removeContactHandler = (id) => {
      const newContactList = contacts.filter((contact) => {
         return contact.id !== id;
      });

      setContacts(newContactList);
   };

   useEffect(() => {
      const retriveContacts = JSON.parse(
         localStorage.getItem(LOCAL_STORAGE_KEY)
      );
      if (retriveContacts) {
         setContacts(retriveContacts);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
   }, [contacts]);

   return (
      <div className="ui container">
         <Router>
            <Header />
            <Switch>
               <Route
                  exact
                  path="/homedemo"
                  render={(props) => (
                     <ContactList
                        {...props}
                        contacts={contacts}
                        getContactId={removeContactHandler}
                        user={user}
                     />
                  )}
               ></Route>
               <Route
                  path="/add"
                  render={(props) => (
                     <AddConatct
                        {...props}
                        addContactHandler={addContactHandler}
                     />
                  )}
               ></Route>
               <Route path="/contact/:id" component={ContactDetails}></Route>
            </Switch>
         </Router>
         <h1>
            {user.name}'<sub>Contact Book</sub>
         </h1>
         {/* <AddConatct addContactHandler={addContactHandler} />
         <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </div>
   );
}

export default AppTask;
