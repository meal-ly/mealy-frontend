import * as React from "react";
import "../styles.scss";

interface IStepDetailProps {
  imgUrl: string;
  title: string;
  text: string;
}

const StepDetail = ({ imgUrl, title, text }: IStepDetailProps) =>
  <div className="column step-detail">
    <img
      src={imgUrl}
      alt={title}
      width="137"
    />
    <p className="title-small">{title}</p>
    <p className="text-small">{text}</p>
  </div>;

export default StepDetail;
