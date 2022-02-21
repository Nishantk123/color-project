import React from "react";
import { useHistory } from "react-router-dom";

const SideNav = () => {
    const history = useHistory();
    const handleHomeRoute = () =>{
        history.push("/")
    }
    const hanldeUserRoute = () =>{
        history.push('/user')
    }

  return (
    <div className="side-nav-container p-3">
      <div className="sidenav-list" onClick={handleHomeRoute}>Home</div>
      <div className="sidenav-list" onClick={hanldeUserRoute}>user</div>
      <div className="sidenav-list">list</div>
      <div className="sidenav-list">Feature</div>
    </div>
  );
};

export default SideNav;
