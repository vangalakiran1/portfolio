import React from "react";
import { FaHeart } from "react-icons/fa";
import "./index.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        Made with love <FaHeart color="red" style={{ margin: "0 10px" }} />{" "}
        @kiran
      </div>
    </div>
  );
}
