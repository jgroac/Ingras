import React from 'react';

const ProfileHeader = (props) => {
  return (
    <div className="row mb-5">
      <div className="col-4 text-center">
        <img className="rounded-circle justify-content-center" src="https://ig-s-c-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/s150x150/15875909_695785000583370_2635829697367244800_a.jpg" />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-6">
            <h3>amandacerny <span className="profile-verified nav-icon">Verified</span></h3>
          </div>
          <div className="col-6 justify-content-end">
            <button type="button" className="btn btn-success button-profile mr-1">Following</button>
            <button type="button" className="btn btn-success button-profile mr-1">▾</button>
            <button type="button" className="btn-link sprite-icon sprite-ellipsis m-0 d-inline-block align-middle"></button>
          </div>
        </div>
        <ul className="row nav justify-content-start pt-4 pb-4">
          <li className="nav-item mr-5">
            <span><strong>1,078</strong> post</span>
          </li>
          <li className="nav-item mr-5">
            <span><strong>1,078</strong> followers</span>
          </li>
          <li className="nav-item">
            <span><strong>1,078</strong> following</span>
          </li>
        </ul>
        <div className="row">
          <p>
            <strong>Amanda Cerny</strong> The pretty girl that makes you laugh👸🏻😂💋 ▪️◾️TURN ON MY POST NOTIFICATIONS◾️▪️ to get your daily dose of happiness 💋Management@amandacerny.com youtu.be/o-SccIVO80k
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
