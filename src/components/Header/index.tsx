import React from "react";
import "./styles.scss";
import profilePic from "../../assets/willemstad.png";
export default () => (
  <header>
    <h1>Infinite Pagination</h1>
    <div className="author-box">
      <div className="author">
        <span className="author-madeby">Made By</span>
        <br />
        <span className="author-name">Yuri Ramos </span>
      </div>
      <div className="img-wrapper">
        <img src={profilePic} className="profile" />
      </div>
    </div>
  </header>
);
