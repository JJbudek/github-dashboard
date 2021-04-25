import React, { useState } from 'react';

import { removeSpacesFromString } from './../../helpers/helpers' 

import './Navbar.scss';

const Navbar = (props) => {
  
  const [userName, setUserName] = useState(['']);

  return (
    <nav className="navbar">
      <form onSubmit={e =>  e.preventDefault() }>
        <input
          value={userName}
          onInput={e => setUserName(e.target.value)} 
          type="text"
          placeholder="Enter person profile name..."
          className="navbar-input"
        />
        <button
          onClick={() =>{
            props.fct(removeSpacesFromString(userName))
          }}
          className="navbar-button"
          type='submit'>Submit
        </button>
      </form>
      <span className="navbar-category">Repositories</span>
    </nav>
  );
}

export default Navbar;
