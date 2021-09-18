import { React, useState } from "react";
import "./Form.css";
import savedData from "./Data.json";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const email_input = (e) => {
    setEmail(e.target.value);
  };
  const name_input = (e) => {
    setName(e.target.value);
  };
  const phone_input = (e) => {
    setPhone(e.target.value);
  };
  const gender_input = (e) => {
    setGender(e.target.value);
  };

  const form_data = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
  };

  const saved_data = [];
  const isUnique = () => {
    var bool = true;
    for (var j = 0; j < savedData.length; j++) {
      if (savedData[j].email == form_data.email) {
        setError("This Email Already Exists");
        bool = false;
      }
    }
    return bool;
  };

  const save = (e) => {
    e.preventDefault();
    if (isUnique()) {
      setError("Success");
      savedData.push(form_data);
    }
    console.log(saved_data);
  };

  return (
    <div>
      <form className="form-container">
        <div>{error}</div>
        <label for="fname">Name</label>
        <input
          value={name}
          onChange={name_input}
          type="text"
          placeholder="Name"
        />
        <label>Email</label>
        <input
          value={email}
          onChange={email_input}
          type="email"
          placeholder="Email"
          required
        />
        <label for="fname">Phone</label>
        <input
          value={phone}
          onChange={phone_input}
          type="text"
          id="fname"
          name="firstname"
          placeholder="Phone"
        />
        <label for="fname">Gender</label>
        <select
          className="selects"
          value={gender}
          onChange={gender_input}
          id="cars"
          name="cars"
        >
          <option value="volvo">Male</option>
          <option value="saab">Female</option>
        </select>
        <button onClick={save}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
