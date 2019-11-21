import * as React from "react";
import "./styles.scss";
import TagButton from "./TagButton";
import { Tags as Tag } from "../../types";

const Tags = () => {
  return (
    <div className="row tag-selector">
      <TagButton>{Tag.desayuno}</TagButton>
      <TagButton>{Tag.almuerzo}</TagButton>
      <TagButton>{Tag.snack}</TagButton>
      <TagButton>{Tag.all}</TagButton>
    </div>
  );
};

export default Tags;
