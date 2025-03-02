import React, { useState } from "react";

function NameForm() {
  // State to hold first name, last name, and full name.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(""); // State to store error message.

  // Handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation: Check if both fields are filled.
    if (firstName && lastName) {
      // Set the full name and clear the error.
      setFullName(`${firstName} ${lastName}`);
      setError(""); // Clear any previous error.
    } else {
      // Set error message if fields are not filled.
      setError("Both First Name and Last Name are required!");
      setFullName(""); // Clear full name.
    }
  };

  return (
    <div>
      <h2>Enter your name</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {fullName && (
        <div className="result">
          <h3>Full Name: {fullName}</h3>
        </div>
      )}
    </div>
  );
}

export default NameForm;
