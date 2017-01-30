import React from 'react';
import ProfileHeaderDesktop from './ProfileHeaderDesktop';
import ProfileHeaderMobile from './ProfileHeaderMobile';


const ProfileHeader = (props) => {
  const { followed_by, follows, media } = props.counts;
  return (
    <div className="row mb-5">
      <div className="col-4 text-center">
        <img className="rounded-circle justify-content-center responsive-img" src={props.profile_picture} />
      </div>
      <ProfileHeaderDesktop {...props}/>
      <ProfileHeaderMobile {...props} />
      <div className="col-12 hidden-sm-up">
        <p className="col-12">
          <strong>{props.full_name}</strong> {props.bio}
        </p>
        <ul className="nav justify-content-center pt-1 pb-0 pl-2" style={{borderTop: '1px solid #999'}}>
          <li className="nav-item mr-5">
            <span><strong className="d-block text-center">{media}</strong> post</span>
          </li>
          <li className="nav-item mr-5">
            <span><strong className="d-block text-center">{followed_by}</strong> followers</span>
          </li>
          <li className="nav-item">
            <span><strong className="d-block text-center">{follows}</strong> following</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
