import React from "react";
import ImgUrl from "../assets/no-orders-bg.jpg";
import "../componentStyle/noData.css";

function NoData() {
  return (
    <div className="no-data-container">
      <div className="no-data-img-wrapper">
        <img src={ImgUrl} alt="no data founc"></img>
      </div>
    </div>
  );
}

export default NoData;
