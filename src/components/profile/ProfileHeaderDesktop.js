import React from 'react';

const ProfileHeaderDesktop = (props) => (
  <div className="col-8 hidden-xs-down">
    <div className="row">
      <div className="col-6">
        <h3>{props.username} </h3>
      </div>
      <div className="col-6 justify-content-end">
        <button type="button" className="btn btn-success button-profile mr-1">Following</button>
        <button type="button" className="btn btn-success button-profile mr-1">▾</button>
        <button type="button" className="btn-link sprite-icon sprite-ellipsis m-0 d-inline-block align-middle"></button>
      </div>
    </div>
    <ul className="row nav justify-content-start pt-4 pb-4 pl-2">
      <li className="nav-item mr-5">
        <span><strong>{props.counts.media}</strong> post</span>
      </li>
      <li className="nav-item mr-5">
        <span><strong>{props.counts.followed_by}</strong> followers</span>
      </li>
      <li className="nav-item">
        <span><strong>{props.counts.follows}</strong> following</span>
      </li>
    </ul>
    <div className="row">
      <p className="pl-2">
        <strong>{props.full_name}</strong> {props.bio}
      </p>
    </div>
  </div>
);

export default ProfileHeaderDesktop;
