
import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {

    const navStyle = {
        color:'white'
    };

    const logout = ()=>{
        localStorage.removeItem("authkey");
        document.location.href="/";
      }

    return (
        <nav>
            <ul className="nav-links">
                <Link style={navStyle} to="/utterence"> Utterence</Link> 
                <Link style={navStyle} to="/conversation"> Conversation </Link>
            </ul>
        </nav>
    )
}

export default Nav;