import React from 'react';

const Login = (props) => {
  const clientID = 'ec2cfbd9b1d54eda80f5e9021f977868';
  const redirectURI = 'http://localhost:8080/profile';
  const uri = `https://api.instagram.com/oauth/authorize/?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token`;
  return (
    <div>
      <a href={uri}>
        Sign In
      </a>
    </div>
  );
};

export default Login;
