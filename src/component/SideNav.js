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
    const handleListRoute = () =>{
      history.push("/list")
    }

  return (
    <div className="side-nav-container p-3">
      <div className="d-flex justify-content-end">
        <img className="close-icon" src="https://t3.ftcdn.net/jpg/03/64/30/82/360_F_364308273_cV9OrZrqUpZ8En9rC8KxBqaxkVg95ZTY.jpg" />
      </div>
      <div className="sidenav-list" onClick={handleHomeRoute}>
        <img className="sidenav-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypdYO69UstVtoxaBkqBzxTIEAzsmTWRBGqQ&usqp=CAU" />
        Home
      </div>
      <div className="sidenav-list" onClick={hanldeUserRoute}>
        <img className="sidenav-image"  src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" />
        user
      </div>
      <div className="sidenav-list" onClick={handleListRoute}>
        <img className="sidenav-image"  src="https://thumbs.dreamstime.com/z/clipboard-vector-icon-check-list-illustration-symbol-roster-logo-clipboard-vector-icon-check-list-illustration-symbol-roster-logo-154426286.jpg" />
        list
        </div>
      <div className="sidenav-list">
        <img className="sidenav-image"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpsIC9V8QXcmneXzRRO1-uyrp3e4bqQhDNQ&usqp=CAU" />
        Feature
      </div>
    </div>
  );
};

export default SideNav;
