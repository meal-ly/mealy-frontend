import * as React from "react";
import Button from "../../Common/Button/";
import { Link } from "react-router-dom";
import "../styles.scss";

interface IPlanCard {
  imgUrl: string;
  title: string;
  text: string;
}

const PlanCard = ({ imgUrl, title, text }: IPlanCard) =>
  <div className="column card-detail">
    <div className="column card-detail-content">
      <img
        src={imgUrl}
        alt={title}
        width="96"
      />
      <p className="title-small">{title}</p>
      <p className="text-small">{text}</p>
    </div>
    <Link to="/register">
      <Button variant="rounded" >
        Inicia tu plan
      </Button>
    </Link>
  </div>;

export default PlanCard;
