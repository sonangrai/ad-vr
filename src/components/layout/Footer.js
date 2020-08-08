import React from "react";
import "../css/header.css";

function Footer() {
  return (
    <div className="footer">
      <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> 2020
    </div>
  );
}

export default Footer;
