import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import relaxrnr from './Logo/relaxrnr.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()


  const handleLogoClick = () => {
    history.push('/')
  }

  return (
    <>
    <ul className='nav-list'>
      <li>
        <NavLink exact to="/" activeClassName='logo' onClick={handleLogoClick}>
          <img src={relaxrnr} className='logo' alt='relaxrnr' />
        </NavLink>
      </li>
      {isLoaded && (
        <li id='profile-button'>
          <ProfileButton user={sessionUser} />
        </li>
      )}
    </ul>
    </>
  );
}

export default Navigation;
