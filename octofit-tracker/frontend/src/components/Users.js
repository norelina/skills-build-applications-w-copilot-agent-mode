import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  // Log the fetched data to the console for debugging
  useEffect(() => {
    fetch('https://ideal-capybara-gr4v9vgw547396jj-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched users:', data); // Debugging log
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Users</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
