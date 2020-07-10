import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "redux/actions";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

// import pic from "assets/img/free_park.jpg";

export default function Profile() {
  const user = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  const dataUser =
    user.google.profile !== undefined
      ? user.google
      : user.facebook.profile !== undefined && user.facebook;

  return (
    <div
      className="md mt-5"
      style={{
        display: "flex",
        justifyContent: "center",
        marginRight: "5px",
        marginLeft: "5px",
      }}
    >
      {dataUser.profile !== undefined && (
        <Card>
          <CardImg
            style={{
              maxWidth: "400px",
              maxHeight: "400px",
            }}
            top
            width="100%"
            src={dataUser.profile.imageUrl}
            alt={dataUser.profile.name}
          />
          <CardBody>
            <CardTitle
              className="font-weight-bold text-center"
              style={{ fontSize: "40px" }}
            >
              {dataUser.profile.name}
            </CardTitle>
            <CardSubtitle className=" text-center" style={{ fontSize: "20px" }}>
              {dataUser.profile.email}
            </CardSubtitle>
            <CardText></CardText>
            <Button
              className="btn btn-dark btn-block"
              onClick={() => dispatch(logout(history))}
            >
              Logout
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
