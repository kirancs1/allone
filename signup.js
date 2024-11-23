import React, { useState } from 'react';
export default function Signup() {
 const [name, setName] = useState("");
 const [id, setId] = useState("");
 const [password, setPassword] = useState("");
 const [submit, setSubmit] = useState(false);
 function handleName(e) {
 setName(e.target.value);
 }
 function handleId(e) {
 setId(e.target.value);
 }
 function handlePassword(e) {
 setPassword(e.target.value);
 }
 function handleSubmit(e) {
 e.preventDefault();
 if (name === '' || id === '' || password === '') {
 alert("Please enter all the fields");
 } else {
 setSubmit(true);
 clearAll();
 }
 }
 function clearAll() {
    setName("");
    setId("");
    setPassword("");
    }
    function successMessage() {
    if (submit) {
    return (
    <div>
    <p id="p">User signed up successfully</p>
    </div>
    );
    }
    }
    return (
    <div>
    <div className="form">
    <form onSubmit={handleSubmit}>
    <div id="d1">
    <p>Signup</p>
    </div>
    <label htmlFor="UserName">User Name</label>
   <input type="text" id="name" name="UserName" value={name}
   onChange={handleName} />
    <label htmlFor="EmailId">Email Id</label>
   <input type="email" id="id" name="EmailId" value={id} 
   onChange={handleId} />
    <label htmlFor="Password">Password</label>
   <input type="password" id="psw" name="Password" value={password} 
   onChange={handlePassword} />
    <button type="submit" id="btn">Create Account</button>
    </form>
    </div>
    <div id="success">
    {successMessage()}
    </div>
    </div>
    );
   }