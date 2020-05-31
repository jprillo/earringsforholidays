import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../style/main.scss"
import NavBar from "../components/NavBar/NavBar";



export default class MainLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isActive: false }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }
 
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <NavBar isActive={this.state.isActive} toggleNavbar={() => this.toggleNavbar()} />
        {children}
    
      </div>
    );
  }
}
