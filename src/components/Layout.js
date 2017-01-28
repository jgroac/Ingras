import React from 'react';
import Nav from './Nav';

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
export default class Layout extends React.Component {
  render () {
    return (
      <div className="container-fluid main-content">
        <Nav />
        <div className="row">
          {this.props.children}
        </div>
        <footer className="container">
          <ul className="nav">
            {
              options.map(option => {
                return (
                  <li className="nav-item">
                    <a className="nav-link" href="#">{option}</a>
                  </li>
                );
              })
            }
          </ul>
        </footer>
      </div>
    );
  }
}
