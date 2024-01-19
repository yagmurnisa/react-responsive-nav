import React, { Fragment, useState, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [showLink, setShowLink] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim().length !== 0 ) {
      navigate(`/search?q=${search}`);
    }
  };
  return (
    <nav>
      <div className='logo'>BLOG</div>
      <button className='searchbtn' onClick={() => {setShowSearch(!showSearch); setShowLink(false)}}>
        <FontAwesomeIcon icon={showSearch ? faTimes : faSearch} color="white"/>
      </button>
      <form className={showSearch ? "open": ""} onSubmit={(e) => handleSearch(e)}>
        <input type='text' placeholder='Search' value={search} onChange={(e) => {setSearch(e.target.value)}}/>
        <button type='submit'><FontAwesomeIcon icon={faSearch} color="#141414"/></button>
      </form>
      <button className='togglebtn' onClick={() => {setShowLink(!showLink); setShowSearch(false)}}>
        <FontAwesomeIcon icon={showLink ? faTimes : faBars} color="white"/>
      </button>
      <ul className={showLink ? "open": ""}>
        <li>
          <NavLink className='navLink' to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink className='navLink' to='/register'>Register</NavLink>
        </li>
        <li>
          <NavLink className='navLink' to='/about'>About</NavLink>
        </li>   
        <li>
          <NavLink className='navLink' to='/posts'>Posts</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar;