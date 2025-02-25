// import { useState } from "react";



// const NameForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const validateName = (name) => {
//     const regex = /^[A-Za-z\s]+$/;
//     return regex.test(name);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Validate first name and last name
//     if (!validateName(firstName)) {
//       setErrorMessage("First Name can only contain letters and spaces.");
//       return;
//     }

//     if (!validateName(lastName)) {
//       setErrorMessage("Last Name can only contain letters and spaces.");
//       return;
//     }

//     // Clear error message if validation is successful
//     setErrorMessage("");
//     setFullName(`${firstName} ${lastName}`);
//   };

//   return (
//     <>
//     <h1 >Full Name Display</h1>
//     <form onSubmit={handleSubmit}>
//     <label>First Name:</label>
//     <input
//       type="text"
//       placeholder="First Name"
//       value={firstName}
//       onChange={(e) => setFirstName(e.target.value)}
//       required
//     />
//     <div>
//     <label>Last Name:</label>
//     <input
//       type="text"
//       placeholder="Last Name"
//       value={lastName}
//       onChange={(e) => setLastName(e.target.value)}
//       required
//     />
//     </div>
//     <button type="submit" className="">
//       Submit
//     </button>


//    </form>
//    {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}


//    {fullName && <div className="mt-6"> Full Name Display {fullName}</div>}

  
//     </>
//   );
// };

// export default NameForm;

import { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Final validation on form submission
    if (!validateName(firstName)) {
      setFirstNameError("First Name can only contain letters and spaces.");
      return;
    }

    if (!validateName(lastName)) {
      setLastNameError("Last Name can only contain letters and spaces.");
      return;
    }

    // If all validations pass, clear errors and display full name
    setFirstNameError("");
    setLastNameError("");
    setFullName(`${firstName} ${lastName}`);
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    // Validate first name on every change
    if (!validateName(value)) {
      setFirstNameError("First Name can only contain letters and spaces.");
    } else {
      setFirstNameError(""); // Clear error when valid
    }
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    // Validate last name on every change
    if (!validateName(value)) {
      setLastNameError("Last Name can only contain letters and spaces.");
    } else {
      setLastNameError(""); // Clear error when valid
    }
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          {/* Display error message if first name is invalid */}
          {firstNameError && <div className="text-red-500">First Name can only contain letters and spaces.</div>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          {/* Display error message if last name is invalid */}
          {lastNameError && <div className="text-red-500">Last Name can only contain letters and spaces.</div>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Show full name only after successful validation */}
      {fullName && <div className="mt-6"> Full Name Display {fullName}</div>}
    </>
  );
};

export default NameForm;
