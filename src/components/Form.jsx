import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "", number: "" });
  function handleForm(e) {
    e.preventDefault();
    console.log(name);
  }
  return (
    <div>
      {name.firstName} - {name.lastName}
      <form action="">
        <h2>Log In</h2>
        <label htmlFor="firstName">
          First Name
          <input
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            type="text"
            value={name.firstName}
          />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            type="text"
            value={name.lastName}
          />
        </label>
        <label htmlFor="number">
          Phone
          <input
            onChange={(e) => setName({ ...name, number: e.target.value })}
            type="number"
            value={name.number}
          />
        </label>
        <input onClick={(e) => handleForm(e)} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
