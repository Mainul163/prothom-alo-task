import React from "react";

const Regular = ({ content }) => {
  console.log(content)
  return (
    <div className="regularAdd">
      <h2 className="highlightedTitle">  বিজ্ঞাপন</h2>
      <div className="add">
        <img
          src="https://dummyimage.com/250x250/000/fff"
          alt=""
        />
      </div>
      <ul>
        {content.items.slice(3).map((e, i) => <li>
          <div className="listItem">
            <p className="regularAddTitle">
              {e.headline}
            </p>
            <img
              src={e.thumb}
              alt={e.headline}
            />
          </div>
          <p className="regularAddSubTitle">৫ ঘণ্টা আগে</p>
        </li>)}


      </ul>
    </div>
  );
};

export default Regular;