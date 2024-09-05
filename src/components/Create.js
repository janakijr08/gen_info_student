import React, { useState } from 'react';

const Create = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [sex, setSex] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [joinedYear, setJoinedYear] = useState('');
  const [graduateYear, setGraduateYear] = useState('');
  const [club, setClub] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const payload = {
      id: parseInt(id, 10),
      name,
      dob,
      sex,
      phoneNumber,
      department,
      joinedYear,
      graduateYear,
      club,
    };

    console.log('Sending payload:', payload);

    try {
      const response = await fetch('https://r6t8btj28d.execute-api.us-east-1.amazonaws.com/Dev/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error Response:', errorData);
        throw new Error(errorData.error || 'Failed to add user');
      }
      const data = await response.json();
      alert(data.Message);

      // Clear the form
      setId('');
      setName('');
      setDob('');
      setSex('');
      setPhoneNumber('');
      setDepartment('');
      setJoinedYear('');
      setGraduateYear('');
      setClub('');
    } catch (error) {
      console.error('Error adding user:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create New User</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleAdd}>
        <label>Reg Number:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <label>Sex:</label>
        <input
          type="text"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
          required
        />
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <label>Year of Joining:</label>
        <input
          type="number"
          value={joinedYear}
          onChange={(e) => setJoinedYear(e.target.value)}
          required
        />
        <label>Year of Graduation:</label>
        <input
          type="number"
          value={graduateYear}
          onChange={(e) => setGraduateYear(e.target.value)}
          required
        />
        <label>Club:</label>
        <input
          type="text"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          required
        />
        
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Create;
