import React, { Component } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';


class Profile extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          <ProfileHeader />
          <ProfilePosts />
        </div>
      </div>
    );
  }
}

export default Profile;
