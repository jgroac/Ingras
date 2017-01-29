import React from 'react';
import { Link } from 'react-router';

const ProfileListItem = (props) => (
  <li key={props.user.id}>
    <Link
      to={`/profile/${props.user.username}`}
      className="d-flex justify-content-start p-2 list__element"
    >
      <div className="col-4">
        <img className="rounded-circle" src={props.user.profile_picture}/>
      </div>
      <div className="col-8 pl-0">
        <span className="d-block"><strong>{props.user.full_name}</strong></span>
        <span style={{color: '#999'}}>{props.user.username}</span>
      </div>
    </Link>
  </li>
);

export default ProfileListItem;
