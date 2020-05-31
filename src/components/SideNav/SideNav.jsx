import React from "react";
import CatergoryLinks from "../CatergoryLinks/CatergoryLinks"
import TagLinks from "../TagLinks/TagLinks"

const SideNav = () => {    
    return(
      <div>
    <CatergoryLinks />
    <TagLinks />
    </div>
  );
}

export default SideNav;

