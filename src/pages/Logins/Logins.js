import React from "react";

import { Button, FormGroup, Label, Input } from "reactstrap";

import styled from "styled-components";
import { Google, Facebook } from "components";

const DivForm = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: auto;
  height: 100%;
  border: 0.001rem solid rgb(79, 252, 79);
`;

function Logins() {
  return (
    <div>
      <DivForm className="login-form shadow p-3 mt-5 mb-5 bg-white rounded">
        <h2 className="text-center">Login Account</h2>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            disabled
            placeholder="Your emails.."
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            disabled
            placeholder="Your password.."
          />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block">Login</Button>
        <div className="text-center pt-3 ">
          <p class="blockquote-footer">Or continue with your social account</p>
        </div>
        <Facebook />
        <Google />
        <div className="text-center">
          <a href="/sign-up" style={{ textDecoration: "none" }}>
            Sign up
          </a>
          <span className="p-2">|</span>
          <a href="/forgot-password" style={{ textDecoration: "none" }}>
            Forgot Password
          </a>
        </div>
      </DivForm>
    </div>
  );
}

export default Logins;
