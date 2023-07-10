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
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='signup-submit-fields'>
        <label>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        {errors.firstName && firstName.length > 0 &&<p className='on-submit-errors'>{errors.firstName}</p>}
        <label>
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && email.length > 0 && <p className='on-submit-errors'>{errors.email}</p>}
        <label>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        {errors.username && username.length > 0 && <p className='on-submit-errors'>{errors.username}</p>}
        {errors.lastName && lastName.length > 0 &&(<p className='on-submit-errors'>{errors.lastName}</p>)}
        <label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && password.length > 0 && (<p className='on-submit-errors'>{errors.password}</p>)}
        <label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        </div>
        <div className='errors-and-submit'>
        {errors.confirmPassword && confirmPassword.length > 0 && (
          <p className='on-submit-errors'>{errors.confirmPassword}</p>
        )}
        <button className='signup-submit' disabled={Object.keys(errors).length > 0} type="submit" >Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
