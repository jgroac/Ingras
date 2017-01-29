import React from 'react';
import PorfileListItem from './ProfileListItem';

const ProfileList = (props) => {
  return (
    <div className={`search-input__list-holder ${props.show ? 'd-block' : null}`}>
      <ul className="list__elements">
      { (props.users && props.users.length)
        ? props.users.map( user => <PorfileListItem user={user} /> )
        : <li className="pt-2 text-center" style={{fontSize: '13px'}}> No results found</li>
      }

      </ul>
    </div>
  );
};

export default ProfileList;
