import React from 'react';
import ProfilePostItem from './ProfilePostItem';

const ProfilePosts = (props) => {
  return (
    <div className="row">
      { props.posts.map((post) => <ProfilePostItem key={post.id} {...post} /> )}
    </div>
  );
};

export default ProfilePosts;
