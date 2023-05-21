import React from "react";
import "./style.css";
import avatar from "../../assets/147133.png";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const clickLogo = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <h1 className="back" onClick={clickLogo}>
        ReelCinema
      </h1>
      <img src={avatar} className="avatar" />
    </div>
  );
};
