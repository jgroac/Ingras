import React from 'react';

const ProfileHeaderMobile = (props) => (
  <div className="col-8 hidden-sm-up" >
    <div className="row">
      <div className="col-6">
        <h3>{props.username} </h3>
      </div>
      <div className="col-4">
        <button type="button" className="btn-link sprite-icon sprite-ellipsis m-0 d-inline-block align-middle"></button>
      </div>
      <div className="col-12">
        <button type="button" className="btn btn-success button-profile mr-1">Following</button>
        <button type="button" className="btn btn-success button-profile mr-1">▾</button>
      </div>
    </div>
  </div>
);

export default ProfileHeaderMobile;
