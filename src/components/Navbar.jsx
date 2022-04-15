import React from "react";

function Navbar(props) {
     console.log(props);
  return (
    <div className="mt-3 navbar navbar-light bg-light">
      <div className="container-fluid justify-content-evenly">
        <a href={props.html_url} className="navbar-brand">
          <img
            src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2021/04/github.png?fit=1150%2C465&ssl=1"
            className="logo img-thumbnail rounded-pill "
          />
        </a>
    
      </div>
    </div>
  );
}

export default Navbar;
