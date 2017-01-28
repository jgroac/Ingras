import React from 'react';
import { Link } from 'react-router';

const Nav = (props) => {
  return (
    <header>
      <nav className="row navbar navbar-light bg-faded"
      style={{backgroundColor: 'white', borderBottom: '1px solid #e7e7e7', padding: '1rem'}}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/" className="navbar-brand brand-logo" href="#">Instagram</Link>
            </div>
            <div className="col justify-content-center">
              <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
            </div>
            <div className="col">
              <nav className="nav justify-content-end">
                <a className="nav-link nav-icon sprite-explore" href="#"></a>
                <a className="nav-link nav-icon sprite-activity" href="#"></a>
                <a className="nav-link nav-icon sprite-profile" href="#"></a>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
