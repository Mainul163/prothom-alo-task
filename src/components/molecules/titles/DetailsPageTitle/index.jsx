import React from "react";
import "../../../../assets/styles/style.scss";
import Title from "../../../atoms/typography/title";
import Subtitle from "../../../atoms/typography/subtitle";

const DetailsPageTitle = ({ headline, subheadline }) => {
  return (
    <div className="HeadlineComp">
      <Subtitle>{subheadline}</Subtitle>
      <Title>{headline}</Title>
    </div>
  );
};

export default DetailsPageTitle;
