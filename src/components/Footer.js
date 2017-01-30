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
    <footer className="container pb-5">
      <div className="row">
        <div className="col-sm-9 col-12">
          <ul className="nav d-block">
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
        <div className="col-sm-3 col-12 text-right text-center-sm" style={{padding: '0.5rem 1rem'}}>
          <span>© 2017 INSTAGRAM</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
