import React from 'react';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/userActions';
import { connect } from 'react-redux';

import Nav from '../components/nav';
import Footer from '../components/Footer';

class Layout extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { hash } = this.props.location;
    const token = hash.split('=')[1];
    if (token) this.props.authenticate(token);
  }

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

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
