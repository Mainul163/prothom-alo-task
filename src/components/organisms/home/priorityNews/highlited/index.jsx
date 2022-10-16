import React from "react";
import { Link } from "react-router-dom";

const Highlighted = ({ content, dataType }) => {
  return (
    <div className="highlighted">
      <h2 className="highlightedTitle">{content.name}</h2>
      <Link to={`/details/${dataType}/${content.items[0].id}`}>
        <div className="topHighlighted">

          <img
            src={content.items[0].thumb}
            alt={content.items[0].headline}
          />
          <h3 class="first-txt"> {content.items[0].headline}</h3>

        </div>
      </Link>
      <Link to={`/details/${dataType}/${content.items[0].id}`}>
        <div className="smallImage imgLft">
          <img
            src={content.items[1].thumb}
            alt={content.items[1].headline}
          />
          <p> {content.items[1].headline}</p>
        </div>
      </Link>
      <Link to={`/details/${dataType}/${content.items[0].id}`}>
        <div className="smallImage imgRgt">
          <img
            src={content.items[2].thumb}
            alt={content.items[2].headline}
          />
          <p> {content.items[2].headline}</p>
        </div>
      </Link>
    </div>
  );
};

export default Highlighted;
