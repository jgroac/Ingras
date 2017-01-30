import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserProfileIfNeeded, } from '../../actions/profileActions';
import { showAllMedia, getVisiblePosts } from '../../actions/postActions';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';


class Profile extends Component {
  componentDidMount (){
    const userID = this.props.params.id;
    this.props.fetchUserProfileIfNeeded(userID);
  }

  componentWillReceiveProps (nextProps) {
    const nextUser = nextProps.params.id;
    this.props.fetchUserProfileIfNeeded(nextUser);
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          { this.props.currentProfile
            ? <ProfileHeader {...this.props.currentProfile}/>
            : null
          }
        </div>
        <div className="container post-container">
          { this.props.posts
            ? <ProfilePosts
                posts={this.props.posts}
                showMoreMedia={this.props.showMoreMedia}
                showAll={this.props.showAll}
              />
            : null
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentProfile: state.profile.currentProfile,
  posts: getVisiblePosts(state.posts),
  showAll: state.posts.showAll
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserProfileIfNeeded: (user) => dispatch(fetchUserProfileIfNeeded(user)),
  showMoreMedia: () => dispatch(showAllMedia())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
