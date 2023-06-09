import React, { useState } from "react";
import "./index.css";

export default function App() {

  const [values,setValues] = useState({
    firstName : "",
    lastName : "",
    email : "",
   
  })

  const [submitted,setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);
  
  const handleFirstInputChange=(event)=>{
    setValues({...values,firstName:event.target.value})
  }

  const handleLastNameInputChange=(event)=>{
    setValues({...values,lastName:event.target.value})
  }

  const handleEmailInputChange=(event)=>{
    setValues({...values,email:event.target.value})
  }

  const handleFormSubmit =(event) =>{
    event.preventDefault();
    if(values.firstName&&values.lastName&&values.email){
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleFormSubmit}>
        {submitted && valid ?<div className="success-message">Sucsses</div> :null} 
        
        <input
          value={values.firstName}
          onChange={handleFirstInputChange}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
       {submitted && !values.firstName? <span>Please Enter a first name</span>:null} 
      
        <input
         value={values.lastName}
         onChange={handleLastNameInputChange}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
         {submitted && !values.lastName? <span>Please Enter a last name</span>:null}
        
        <input
         value={values.email}
         onChange={handleEmailInputChange}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
       {submitted && !values.email? <span>Please Enter a email</span>:null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}