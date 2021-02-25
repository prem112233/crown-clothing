import React, { useState } from "react";
import FormInput from "../Form-input/Form-input.component";
import "./sign-in.styles.scss";

const SignI = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const Handlesubmit = (event) => {
    event.preventDefault();
    // alert("email: ${email}, password: $(password)");
  };
  return (
    <div className="signi">
      <h2>I Already have an account</h2>
      <span>Singn in with your email and password </span>
      <form onSubmit={Handlesubmit}>
        <FormInput
          onChange={(event) => setemail(event.target.value)}
          name="email"
          value={email}
          label="email"
          required
        />
        {/* <label>Email</label> */}
        <FormInput
          onChange={(event) => setpassword(event.target.value)}
          name="password"
          type="password"
          value={password}
          label="password"
          required
        />
        {/* <label>Password</label> */}
        <input type="Submit" value="Submit Form" />
      </form>
    </div>
  );
};
export default SignI;
