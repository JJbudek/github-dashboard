import React, { useEffect, useState } from 'react';
import './Navbar.scss';

function Navbar(props) {
  
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
          onClick={() => props.fct(userName)}
          className="navbar-button"
          type='submit'>Submit
        </button>
      </form>
      <span className="navbar-category">Repositories</span>
    </nav>
  );
}

export default Navbar;
