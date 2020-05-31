import React from "react";
import Helmet from "react-helmet";

import Layout from "../layout";

import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import SideNav from "../components/SideNav/SideNav";


class Landing extends React.Component {
  render() {
  
    return (
      <Layout>
        <div className="landing-container">
          <div className="posts-container">
            <Helmet title={config.siteTitle} />
            <SEO />
         <h1>VynTrade landing</h1>
          </div>
        </div>

<SideNav />

      </Layout>
    );
  }
}

export default Landing;


