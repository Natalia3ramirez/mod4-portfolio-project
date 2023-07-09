import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";


function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {}

    if(email.length < 1) {
      errors.email = "Email field cannot be empty"
    }
    if(username.length < 4) {
      errors.username = "Username field must be at least 4 characters"
    }
    if(firstName.length < 1) {
      errors.firstName = "First Name field cannot be empty"
    }
    if(lastName.length < 1) {
      errors.lastName= "Last Name field cannot be empty"
    }
    if(password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }
    if(confirmPassword.length < 1) {
      errors.confirmPassword = "Confirm Password field cannot be empty"
    }

    setErrors(errors)
  }, [email, username, firstName, lastName, confirmPassword, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && email.length > 0 && <p className='on-submit-errors'>{errors.email}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && username.length > 0 && <p className='on-submit-errors'>{errors.username}</p>}
        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && firstName.length > 0 &&<p className='on-submit-errors'>{errors.firstName}</p>}
        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        {errors.lastName && lastName.length > 0 &&(<p className='on-submit-errors'>{errors.lastName}</p>)}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && password.length > 0 && (<p className='on-submit-errors'>{errors.password}</p>)}
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        {errors.confirmPassword && confirmPassword.length > 0 && (
          <p className='on-submit-errors'>{errors.confirmPassword}</p>
        )}
        <button disabled={Object.keys(errors).length > 0} type="submit" >Sign Up</button>
      </form>
    </>
  );
}

export default SignupFormModal;
