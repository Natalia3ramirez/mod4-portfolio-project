import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    const errors = {}

    if (credential.length < 4) {
      errors.credential = "Username must be 4 characters or more"
    }
    if (password.length < 6) {
      errors.password = "Password must be 6 characters or more"
    }

    setErrors(errors)
  }, [credential, password])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const demoUser = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential: "Demo-lition", password: "password" }))
      .then(closeModal)
  }

  return (

    <div className='login-form-container'>
      <h1 className='login-modal'>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className='username-password'>
          <div className='username-or-email'>
            <label>
              <input
                type="text"
                value={credential}
                placeholder="Username or Email"
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='enter-password'>
            <label>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
        </div>
        <div className='errors-and-login'>
          {errors.credential && credential.length > 0 && (
            <p className='on-submit-errors'>{errors.credential}</p>
          )}
          {errors.password && password.length > 0 && (
            <p className='on-submit-errors'>{errors.password}</p>
          )}
        </div>
        <div className='login-and-demo-user'>
          <button className='submit-login' disabled={Object.keys(errors).length > 0} type="submit">Log In</button>
          <button onClick={demoUser} className="demo-user-button">Demo User</button>
        </div>
      </form>
    </div>

  );
}

export default LoginFormModal;
