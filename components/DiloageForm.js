import React from "react";
import Link from "./DialogBoxes/Link";
import Tiktok from "./DialogBoxes/Tiktok";
import YouTube from "./DialogBoxes/YouTube";
import Form from "./DialogBoxes/Form";
import Music from "./DialogBoxes/Music";
import Product from "./DialogBoxes/Product";
import Events from "./DialogBoxes/Events";

const componentMap = {
  Link,
  Tiktok,
  YouTube,
  Form,
  Music,
  Product,
  Events,
};

const DiloageForm = ({ title, id }) => {
  const Component =
    title == "Music" || title == "Gallary" ? Link : componentMap[title]; // Dynamically get the component

  if (!Component) {
    return <div>Component not found: {title}</div>; // Handle invalid titles
  }

  return <Component id={id} />; // Render the resolved component
};

export default DiloageForm;
