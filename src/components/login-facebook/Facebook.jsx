import React, { useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";
import { getFacebook } from "redux/actions";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
  font-size: 17px;
  line-height: 20px;
  background-color: #3b5998;
  color: white;
`;

export default function Facebook() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const handleResponse = (data) => {
    dispatch(getFacebook(data, history));
  };

  const handleError = (error) => {
    console.log(errors);

    setErrors({ error });
  };

  return (
    <FacebookProvider appId="1708626562624984">
      <Login scope="email" onCompleted={handleResponse} onError={handleError}>
        {({ loading, handleClick, error, data }) => (
          <Button onClick={handleClick}>
            {" "}
            <i class="fa fa-facebook fa-fw"></i>
            {loading ? <span>Loading...</span> : "Login with Facebook"}
          </Button>
        )}
      </Login>
    </FacebookProvider>
  );
}
