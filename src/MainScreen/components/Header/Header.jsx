import React, { useState } from 'react';

import './Header.scss';

const Header = ({data}) => {
  const [isShowin, setIsShowing] = useState(true)
  
  if (!data || data.length === 0) return <p>No repos, sorry</p>;
  return (
    <header className="header">
        <img src={data.avatar_url} alt=""/>
        <span className="header-member-name">{data.name}</span>
        <span className="header-member-date"><div>Member since </div>{data.created_at.substring(0, 10)}</span>
        <ul className="header-member-data">
          <li><div>Login</div>{data.login}</li>
          <li><div>Location</div>{data.location || 'Location not specified'}</li>
          <li><div>e-mail</div>{data.email || 'e-mail not specified'}</li>
          <li><div>Public repos</div>{data.public_repos}</li>
          <li><div>Github homepage</div><a href={data.html_url}>{data.login}</a></li>
        </ul>
    </header>
  );
}

export default Header;
