import React from 'react';

const ProfileHeader = (props) => {
  const { followed_by, follows, media } = props.counts;
  return (
    <div className="row mb-5">
      <div className="col-4 text-center">
        <img className="rounded-circle justify-content-center" src={props.profile_picture} />
      </div>
      <div className="col-8">
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
        <ul className="row nav justify-content-start pt-4 pb-4">
          <li className="nav-item mr-5">
            <span><strong>{media}</strong> post</span>
          </li>
          <li className="nav-item mr-5">
            <span><strong>{followed_by}</strong> followers</span>
          </li>
          <li className="nav-item">
            <span><strong>{follows}</strong> following</span>
          </li>
        </ul>
        <div className="row">
          <p>
            <strong>{props.full_name}</strong> {props.bio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
