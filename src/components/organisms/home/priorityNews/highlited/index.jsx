import React from "react";

const Highlighted = ({content}) => {
  return (
    <div className="highlighted">
      <h2 className="highlightedTitle">{content.name}</h2>
      <div className="topHighlighted">
        <img
          src={content.items[0].thumb}
          alt={content.items[0].headline}
        />
        <h3 class="first-txt"> {content.items[0].headline}</h3>
      </div>
      <div className="smallImage imgLft">
        <img
          src={content.items[1].thumb}
          alt={content.items[1].headline}
        />
        <p> {content.items[1].headline}</p>
      </div>
      <div className="smallImage imgRgt">
      <img
          src={content.items[2].thumb}
          alt={content.items[2].headline}
        />
        <p> {content.items[2].headline}</p>
      </div>
    </div>
  );
};

export default Highlighted;
