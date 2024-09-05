import React, { useState } from 'react';

const Update = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const payload = {
      id: parseInt(id, 10),
      name,
      phoneNumber,
    };

    try {
      const response = await fetch('https://r6t8btj28d.execute-api.us-east-1.amazonaws.com/Dev/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Response:', errorData);
        throw new Error(errorData.error || 'Failed to update user');
      }

      const data = await response.json();
      alert(data.Message);
    } catch (error) {
      console.error('Error updating user:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Update User</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleUpdate}>
        <label>ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label>New Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>New Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;
