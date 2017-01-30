import React from 'react';

const Login = (props) => {
  const clientID = 'ec2cfbd9b1d54eda80f5e9021f977868';
  const redirectURI = 'http://localhost:8080/dashboard';
  const uri = `https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=public_content`;
  return (
    <div className="col-12 text-center">
      <p>
        For start to use InGran you need to logged with instagram,
        please sign in
      </p>
      <a className="btn btn-success button-profile" href={uri}>
        Sign In
      </a>
    </div>
  );
};

export default Login;
