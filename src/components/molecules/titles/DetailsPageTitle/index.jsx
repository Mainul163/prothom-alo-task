import React from "react";
import "../../../../assets/styles/style.scss";
import Title from "../../../atoms/typography/title";
import Subtitle from "../../../atoms/typography/subtitle";

const DetailsPageTitle = () => {
  return (
    <div className="HeadlineComp">
      <Subtitle>i am subtitle</Subtitle>
      <Title>বিশ্বের বেশ কয়টি দেশে বর্তমানে প্রেসিডেন্ট পদে দায়িত্ব পালন করছেন নারীরা। </Title>
    </div>
  );
};

export default DetailsPageTitle;
