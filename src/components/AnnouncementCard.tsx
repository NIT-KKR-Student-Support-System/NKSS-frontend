import React from "react";
import "../style/homeCard.scss";
import img from "../assets/1.png";

function AnnouncementCard() {
  return (
    <div className="homeCardCont">
      <div className="imgCont">
        <img src={img} alt="" />
      </div>
      <div className="bottom">
        <h1>Announcements</h1>
        <p>Aaaah, not the exam results! Not NOW!!</p>
      </div>
    </div>
  );
}

export default AnnouncementCard;
