import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { getGoogle } from "redux/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  background-color: white;
  color: white;
`;

export default function Google() {
  const history = useHistory();
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    dispatch(getGoogle(response, history));
  };

  return (
    <Button>
      <GoogleLogin
        clientId="911358723721-di626995oaot1j9u749lhlds0jdd3i42.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </Button>
  );
}
