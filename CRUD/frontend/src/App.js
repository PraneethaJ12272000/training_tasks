// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserDetailsForm from './UserDetailsForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserCreate = async (newUser) => {
    console.log(newUser)
    await axios.post(`http://localhost:5000/api/users`,newUser);
    
  };

  const handleUserUpdate = (user) => {
    setEditingUser(user);
  };

  const handleUserUpdateSubmit = async (updatedUser) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/users/${updatedUser._id}`, updatedUser);
      const updatedUsers = users.map((user) => (user._id === updatedUser._id ? response.data : user));
      setUsers(updatedUsers);
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${userId}`);
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="App">
      <h1>User Details Form</h1>
      {editingUser ? (
        <div>
          <h2>Edit User</h2>
          <UserDetailsForm
            initialData={editingUser}
            handleSubmit={handleUserUpdateSubmit}
          />
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      ) : (
        <UserDetailsForm handleUserCreate={handleUserCreate} />
      )}
      <UserList
        users={users}
        handleUserUpdate={handleUserUpdate}
        handleUserDelete={handleUserDelete}
      />
    </div>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState({
//     Name:'',
//     Age:'',
//     Email:'',
//   });


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/users');
//       setData(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleCreate = async ({ Name, Age, Email }) => {
//     // try {
//       console.log({ Name, Age, Email });
//       await axios.post('http://localhost:5000/api/users', { Name, Age, Email });
//       // fetchData();
//     // } catch (error) {
      
//     // }
//   };

//   // const handleCreate = (newUser) => {
//   //   setData([data, newUser]);
//   // };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:5000/api/users/${id}`, data);
//       fetchData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/users/${id}`);
//       fetchData();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     handleCreate(data);
//   }

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setData({data,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       {/* <h1>User Details</h1>
//       <form onSubmit={handleFormSubmit}>
//       <div>
//         <input type="text" placeholder="Name" value={data.Name} onChange={handleChange}/>
//         <input type="text" placeholder="Age" value={data.Age} onChange={handleChange}/>
//         <input type="text" placeholder="Email" value={data.Email} onChange={handleChange}/>
//         <button type='submit'>Submit</button>
//       </div>
//       </form> */}
//       {/* <div>
//         <h2>User List</h2> 
//         <ul>
//           {data.map((users) => (
//             <li key={users._id}>
//               <p><strong>Name:</strong> {users.Name}</p>
//               <p><strong>Age:</strong> {users.Age}</p>
//               <p><strong>Email:</strong> {users.Email}</p>
//               <button onClick={() => handleUpdate(users._id)}>Update</button>
//               <button onClick={() => handleDelete(users._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div> */}
//     </div>
//   );
// };

// export default App;