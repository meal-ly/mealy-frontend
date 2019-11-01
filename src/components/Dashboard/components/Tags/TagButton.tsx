import * as React from "react";
import "./styles.scss";
import { useComponentState } from "../../hooks";
import { Tags } from "../../types";

interface ITagButtonProps {
  children: Tags;
}

const TagButton = ({ children }: ITagButtonProps) => {

  const { tag, selectTag } = useComponentState();

  const isSelected = React.useMemo(
    () => children === tag,
    [children, tag],
  );

  const handleClick = () => {
    selectTag(children);
  };

  return (
    <button className={`tag-button ${isSelected ? "selected" : ""}`} type="button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default TagButton;
