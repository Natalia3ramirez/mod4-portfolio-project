import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import { NavLink, useHistory } from 'react-router-dom';



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();
  const history = useHistory()

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  return (
    <>

      {user ? (<span><NavLink className="user-create-new-spot" to='/spots/new'>Create a New Spot</NavLink></span>) : ("")}
      <button className='user-button-container' onClick={openMenu}>
        <span className="material-symbols-outlined">menu</span>
        <i className="fas fa-user-circle" />
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>Hello, {user.firstName}</li>
            <li>{user.email}</li>
            <li>
              <NavLink to="/spots/current" className='user-manage-spots'>Manage Spots</NavLink>
            </li>
            <li className='logout-button-container'>
              <button className='logout-button' onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <div className='login-modal'>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<div className='login-form-modal-container'><LoginFormModal /></div>}
              />
            </div>
            <div className='signup-modal'>
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </div>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
