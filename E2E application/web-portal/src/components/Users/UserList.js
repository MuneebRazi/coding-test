import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { deleteUser, FetchAllUsers } from '../../Action/User';

const UserList = (props) => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if(users.length === 0)
    FetchAllUsers()
      .then(response => {
        setUsers(response.data.result)
      });
  }, [users]);
  
  if (users.length === 0) {
    return (
        <div style={{textAlign:"center"}}>
          No user found.
        </div>
      )
  }
  const handleSubmit = () => {
    FetchAllUsers()
      .then(response => {
        setUsers(response.data.result)
      });
  }
  const handleUpdate = (user) => {
    
    props.setUser(user);
  }
  const handleDelete = (user) => {
    deleteUser(user.id).then(response => {
      if (response.data.success) {
        toast(`${response.data.message}`);
      } else {
        toast(`${response.data.message}`);
      }
    });
  }
  const UserRow = (user, index) => {

    return (
      <tr key={index} >
        <td style={{ border: "1px solid #AAA", padding: "5px" }}>{user.fullName}</td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}>{user.email}</td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}>{user.contact}</td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}>{user.address}</td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}>{user.age}</td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}><button type="button" onClick={() => handleUpdate(user)}> Edit</button></td>
        <td style={{ border: "1px solid #AAA", padding: "5px" }}><button type="button" onClick={() => handleDelete(user)}> Delete</button></td>
      </tr>
    )
  }
  const userTable = users.map((user, index) => UserRow(user, index))

  return (
    <div>
      <div>
        <button style={{ width:"150px", height:"50px", padding: "5px" }} onClick={handleSubmit}>Refresh Users List</button>
      </div>
      <div style={{textAlign:"center"}}>
        User List
      </div>
      <table >
        <thead>
          <tr style={{ border:"1px solid #AAA"}}>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>FullName</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Email</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Contact</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Address</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Age</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Edit</th>
            <th style={{ border: "1px solid #AAA", padding: "5px" }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userTable}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  )
}
export default UserList;
