import React from 'react';

const options = [
  'About us',
  'Support',
  'Blog',
  'Press',
  'Api',
  'Jobs',
  'Privacy',
  'Terms',
  'Directory'
];

const Footer = (props) => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-9">
          <ul className="nav">
            {
              options.map((option, index) => {
                return (
                  <li key={index} className="nav-item">
                    <a className="nav-link" href="#">{option}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="col-3 text-right" style={{padding: '0.5rem 1rem'}}>
          <span>© 2017 INSTAGRAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
