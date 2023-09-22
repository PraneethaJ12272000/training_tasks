// src/UserList.js
import React from 'react';

const UserList = ({ users, handleUserUpdate, handleUserDelete }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <p><strong>Name:</strong> {user.Name} </p>
          <p><strong>Age:</strong> {user.Age}</p>
          <p><strong>Email:</strong> {user.Email}</p>
          <button onClick={() => handleUserUpdate(user)}>Edit</button>
          <button onClick={() => handleUserDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

// import React, { useState, useEffect } from 'react';

// const UserList = () => {

//     return (
//         <div>
//             <h2>User List</h2>
//             <ul>
//                 {data.map((users) => (
//                     <li key={users._id}>
//                         <p><strong>Name:</strong> {users.Name}</p>
//                         <p><strong>Age:</strong> {users.Age}</p>
//                         <p><strong>Email:</strong> {users.Email}</p>
//                         <button onClick={() => handleUpdate(users._id)}>Update</button>
//                         <button onClick={() => handleDelete(users._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default UserList;