import React, { useState, useEffect } from 'react';

const UserDetailsForm = ({ initialData, handleSubmit,handleUserCreate }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Age: '',
    Email: '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleUserCreate(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="Name">Name:</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Age:</label>
        <input
          type="text"
          id="Age"
          name="Age"
          value={formData.Age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Email:</label>
        <input
          type="email"
          id="Email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserDetailsForm


// import React, { useState, useEffect } from 'react';

// const UserForm = () => {
//     const [data, setData] = useState({
//         Name: '',
//         Age: '',
//         Email: '',
//     });

//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         handleCreate(data);
//       }
    
//       const handleChange = (event) => {
//         const { name, value } = event.target;
//         setData({data,
//           [name]: value,
//         });
//       };

//       useEffect(() => {
//         fetchData();
//       }, []);

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <div>
//                 <h1>User Details</h1>
//                 <div>
//                     <input type="text" placeholder="Name" value={data.Name} onChange={handleChange} />
//                     <input type="text" placeholder="Age" value={data.Age} onChange={handleChange} />
//                     <input type="text" placeholder="Email" value={data.Email} onChange={handleChange} />
//                     <button onClick={handleFormSubmit}>Submit</button>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default UserForm;