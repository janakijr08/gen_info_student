import React, { useState } from 'react';

const Delete = () => {
  const [id, setId] = useState();

  const handleDelete = async (e) => {
    e.preventDefault();
    const payload = {
      id : parseInt(id,10),
    }
    const response = await fetch('https://r6t8btj28d.execute-api.us-east-1.amazonaws.com/Dev/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    alert(data.Message);
  };

  return (
    <div className="form-container">
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete User</button>
      </form>
    </div>
  );
};

export default Delete;
