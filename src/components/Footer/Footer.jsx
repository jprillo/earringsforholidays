import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
  
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className="footer">
        <UserLinks config={config} labeled />
        <div className="notice-container">
          <p>{copyright}</p>

          <p>
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
