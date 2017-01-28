import React from 'react';

const ProfileHeader = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <img src="https://ig-s-c-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/s150x150/15875909_695785000583370_2635829697367244800_a.jpg" />
      </div>
      <div className="col-8">
        <div className="row">
          <div className="col-6">
            <h3>amandacerny</h3>
          </div>
          <div className="col-6 justify-content-end">
            <button type="button" className="btn btn-success">Following</button>
            <button type="button" className="btn btn-success">▾</button>
            <button type="button" className="btn">...</button>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <span><strong>1,078</strong> post</span>
          </div>
          <div className="col">
            <span><strong>1,078</strong> followers</span>
          </div>
          <div className="col">
            <span><strong>1,078</strong> following</span>
          </div>
        </div>
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
