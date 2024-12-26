import React from "react";
import Link from "./DialogBoxes/Link";
import Tiktok from "./DialogBoxes/Tiktok";
import YouTube from "./DialogBoxes/YouTube";
import Form from "./DialogBoxes/Form";
import Music from "./DialogBoxes/Music";

const componentMap = {
  Link,
  Tiktok,
  YouTube,
  Form,
  Music,
};

const DiloageForm = ({ title, id }) => {
  const Component = title == "Music" ? Link : componentMap[title]; // Dynamically get the component

  if (!Component) {
    return <div>Component not found: {title}</div>; // Handle invalid titles
  }

  return <Component id={id} />; // Render the resolved component
};

export default DiloageForm;
