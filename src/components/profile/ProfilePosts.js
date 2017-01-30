import React from 'react';
import ProfilePostItem from './ProfilePostItem';

const ProfilePosts = (props) => {
  return (
    <div className="row">
      { props.posts.map((post) => <ProfilePostItem key={post.id} {...post} /> )}
      <div className="col-12 text-center" style={{ display: props.showAll ? 'none' : null }}>
        <button className="button-more" onClick={() => props.showMoreMedia()}>
          Load More
         </button>
      </div>
    </div>
  );
};

export default ProfilePosts;
