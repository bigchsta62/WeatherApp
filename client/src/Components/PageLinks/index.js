import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PageData } from "../../data_sources/data_sources";

function PageLinks() {
  // const location = useLocation()
  // console.log(location);;
  return (
    <ul className="navbar-nav mr-auto">
      {PageData.map((data, key) => (
        <li key={key} className="nav-item">
          <a to={data.url} className="barb">
            {data.name}
            
          </a>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
