import React from 'react';
import PorfileListItem from './ProfileListItem';

const ProfileList = (props) => {
  return (
    <div className={`search-input__list-holder ${props.show ? 'd-block' : null}`}>
      <ul className="list__elements">
      { props.users.map( user => <PorfileListItem user={user} /> ) }
      </ul>
    </div>
  );
};

export default ProfileList;
