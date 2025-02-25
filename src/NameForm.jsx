import { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateName = (name) => {
    // Regular expression to allow only alphabetic characters and spaces
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate first name and last name
    if (!validateName(firstName)) {
      setErrorMessage("First Name can only contain letters and spaces.");
      return;
    }

    if (!validateName(lastName)) {
      setErrorMessage("Last Name can only contain letters and spaces.");
      return;
    }

    // Clear error message if validation is successful
    setErrorMessage("");
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Full Name Display</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </div>
      </form>

      {/* Show error message if any */}
      {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}

      {/* Display full name after successful submission */}
      {fullName && <div className="mt-4">Full Name: {fullName}</div>}
    </div>
  );
};

export default NameForm;
