import React from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
import "./RightSidebar.css";

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <Widget />
      <WidgetTags />
    </aside>
  );
}

export default RightSidebar;
