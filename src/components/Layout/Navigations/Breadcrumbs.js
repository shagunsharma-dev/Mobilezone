import React from "react";
import "../../../App.css";
 const Breadcrumbs = ({ paths }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol id="breadcrumb" className="breadcrumb">
        {paths.map((path, index) => {
          return (
            <li
              key={index}
              className={`breadcrumb-item${
                index === paths.length - 1 ? " active" : ""
              }`}
            >
              {index === paths.length - 1 ? (
                <span>{path.name}</span>
              ) : (
                <a href={path.url}>
                  <span className={`fa ${path.icon}`}></span>
                  {path.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
