import React from "react";
import "./RightSidebar.css";

function WidgetTags() {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    " java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];
  return (
    <div className="widget-tags">
      <h4>Watched tages</h4>
      <div className="widget-tags-div">
        {tags.map((tag) => {
          return <p key={tag}>{tag}</p>;
        })}
      </div>
    </div>
  );
}

export default WidgetTags;
