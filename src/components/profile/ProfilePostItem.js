import React from 'react';

const ProfilePostItem = (props) => (
  <div className="col-4 mb-4">
    <a className="post" href={props.link}>
      <img src={props.images.standard_resolution.url}/>
      { props.type === 'video'
        ? <span className="post__video sprite-icon sprite-video mt-0"></span>
        : null
      }
      <div className="post__overlay">
        <div className="overlay__content">
          <li className="likes mr-5">
            <i className="sprite-icon sprite-heart d-inline-block align-middle m-0 mr-2"></i>
            {props.likes.count}
          </li>
          <li className="comments">
            <i className="sprite-icon sprite-comment d-inline-block align-middle m-0 mr-2"></i>
            {props.comments.count}
          </li>
        </div>
      </div>
    </a>
  </div>
);

export default ProfilePostItem;
