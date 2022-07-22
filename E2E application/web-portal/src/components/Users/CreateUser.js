import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createUser, updateUser } from '../../Action/User'

const CreateUser = (props) => {

  const {user, setUser} = props;
  useEffect(() => {
  },[user]);
  const handleSubmit = () => {
    createUser(user)
      .then(response => {
        if (response.data.success) {
          toast(`${response.data.message}`);
          setUser({
            id: undefined,
            fullName: "",
            contact: "",
            address: "",
            age: 0,
            email: "",
            password: ""
          })
        } else {
          toast(`${response.data.message}`);
        }
      });
  }
  const handleSubmitUpdate = () => {
    updateUser(user)
      .then(response => {
        if (response.data.success) {
          toast(`${response.data.message}`);
          setUser({
            id: undefined,
            fullName: "",
            contact: "",
            address: "",
            age: 0,
            email: "",
            password: ""
          })
        } else {
          toast(`${response.data.message}`);
        }
      });
  }
  const handleReset = () => {
    setUser({
      id: undefined,
      fullName: "",
      contact: "",
      address:"",
      age:0,
      email:"",
      password:""
    })
  }
  const handleChange = (e) => {
    if (e.target.name === 'fullName') {
      setUser({ ...user, fullName: e.target.value });
    } else if (e.target.name === 'contact') {
      setUser({ ...user, contact: e.target.value });
    } else if (e.target.name === 'address') {
      setUser({ ...user, address: e.target.value });
    } else if (e.target.name === 'age') {
      setUser({ ...user, age: e.target.value });
    } else if (e.target.name === 'email') {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.name === 'password') {
      setUser({ ...user, password: e.target.value });
    } else if (e.target.name === 'newPassword') {
      setUser({ ...user, newPassword: e.target.value });
    }
  }
  return (
    <div>
      {user.id === undefined ? (<h2>Create a User</h2>) : (<h2>Update a User</h2>) } 
        <form autoComplete='off'>
          <div style={{ display: "flex", flex: "row", padding:"5px" }}>
            <label htmlFor="fullName">FullName</label>
            <input type="text" onChange={handleChange} style={{marginLeft:"20px"}} value={user.fullName} name="fullName" id="fullName" placeholder="FullName" />
          </div>
          <div style={{ display: "flex", flex: "row", padding:"5px" }}>
            <label htmlFor="contact">Contact</label>
          <input type="text" onChange={handleChange} style={{ marginLeft: "32px" }} value={user.contact} name="contact" id="contact" placeholder="Contact" />
          </div>
          <div style={{ display: "flex", flex: "row", padding: "5px" }}>
            <label htmlFor="address">Address</label>
          <input type="text" onChange={handleChange} style={{ marginLeft: "30px" }} value={user.address} name="address" id="address" placeholder="Address" />
          </div>
          <div style={{ display: "flex", flex: "row", padding: "5px" }}>
            <label htmlFor="age">Age</label>
          <input type="number" onChange={handleChange} style={{ marginLeft: "59px" }} value={user.age} name="age" id="age" />
          </div>
          <div style={{ display: "flex", flex: "row", padding: "5px" }}>
            <label htmlFor="email">Email</label>
          <input type="text" autocomplete="false" onChange={handleChange} style={{ marginLeft: "49px" }} value={user.email} name="email" id="email"  placeholder="Email" />
          </div>
          { user.id === undefined ? (
            <div style={{ display: "flex", flex: "row", padding: "5px" }}>
              <label htmlFor="password">password</label>
              <input type="password" autocomplete="false" onChange={handleChange} style={{ marginLeft: "20px" }} name="password" id="password" placeholder="Password" />
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", flex: "row", padding: "5px" }}>
                <label htmlFor="password">password</label>
                <input type="password" autocomplete="false" onChange={handleChange} style={{ marginLeft: "20px" }} name="password" id="password" placeholder="Password" />
              </div>
              <div style={{ display: "flex", flex: "row", padding: "5px" }}>
                <label htmlFor="password">New password</label>
                <input type="password" autocomplete="false" onChange={handleChange} style={{ marginLeft: "5px" }} name="newPassword" id="newPassword" placeholder="New Password" />
              </div>
            </div>
          )

          }
          {
            user.id === undefined ? (
              <button type="button" onClick={handleSubmit}>Create</button>
            ):(
              <button type="button" onClick={handleSubmitUpdate}>Update</button>
            )
          }
          <button type="button" onClick={handleReset}>Reset</button>
          
        </form>
      <ToastContainer/>
    </div>
  )
}

export default CreateUser;