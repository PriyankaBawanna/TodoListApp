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
    <>
    <h1 >Full Name Display</h1>
    <form onSubmit={handleSubmit}>
    <label>First Name:</label>
    <input
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
    <div>
    <label>Last Name:</label>
    <input
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
    </div>
    <button type="submit" className="">
      Submit
    </button>


   </form>
   {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}


   {fullName && <div className="mt-6">Full Name: {fullName}</div>}

  
    </>
  );
};

export default NameForm;
{/* <div className="">
<h1 >Full Name Display</h1>
<form onSubmit={handleSubmit}>
  <div>
<div>
<label>First Name:</label>
    <input
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />

</div>

    <label>Last Name:</label>
    <input
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />

</div>
    <button type="submit" className="">
      Submit
    </button>

</form>


{errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}


{fullName && <div className="mt-4">Full Name: {fullName}</div>}
</div> */}
