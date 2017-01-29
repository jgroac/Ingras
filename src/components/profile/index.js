import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfile } from '../../actions/profileActions';
import { fetchUserPosts } from '../../actions/postActions';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';


class Profile extends Component {
  componentDidMount (){
    this.props.fetchProfile('199403748').then(
      () => this.props.fetchMedia('199403748')
    );
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          { this.props.currentProfile
            ? <ProfileHeader {...this.props.currentProfile}/>
            : null
          }
          { this.props.posts
            ? <ProfilePosts posts={this.props.posts} />
            : null
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentProfile: state.profile.currentProfile,
  posts: state.posts.posts
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (user) => dispatch(fetchUserProfile(user)),
  fetchMedia: (user) => dispatch(fetchUserPosts(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
