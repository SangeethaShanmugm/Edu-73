import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <hr />
        <h3>Copyright Developer 2023. All Rights Reserved</h3>
        <div className="fotDiv">
          <ul>
            <li>Home</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="fotDiv">
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="fotDiv-noborder">
          <ul>
            <li>Visit our website</li>
            <li>Links</li>
          </ul>
        </div>
        <div className="social">
          <center>
            <a href="www.facebook.com/" target="_blank">
              <img
                src="https://i.ibb.co/dtzG625/facebook.png"
                alt="fb"
                className="socialImg"
              />
            </a>
            <a href="www.instagram.com/" target="_blank">
              <img
                src="https://i.ibb.co/19H5LvT/insta.png"
                alt="insta"
                className="socialImg"
              />
            </a>
            <a href="www.youtube.com/" target="_blank">
              <img
                src="https://i.ibb.co/w07K2Vn/youtube1.png"
                alt="yt"
                className="socialImg"
              />
            </a>
          </center>
        </div>
      </footer>
    );
  }
}
