import React from 'react';
import { Link } from 'react-router';

const ProfileListItem = (props) => (
  <li>
    <Link
      to={`/profile/${props.user.id}`}
      className="d-flex justify-content-start p-2 list__element"
    >
      <div className="col-4">
        <img className="rounded-circle responsive-img" src={props.user.profile_picture}/>
      </div>
      <div className="col-8 pl-0">
        <span className="d-block"><strong>{props.user.full_name}</strong></span>
        <span style={{color: '#999'}}>{props.user.username}</span>
      </div>
    </Link>
  </li>
);

export default ProfileListItem;
