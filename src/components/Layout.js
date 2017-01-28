import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class Layout extends React.Component {
  render () {
    return (
      <div className="container-fluid main-content">
        <Nav />
        <div className="row p-5">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
