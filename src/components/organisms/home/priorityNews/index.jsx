import React from "react";
import Highlighted from './highlited'
import Regular from "./regular";
import data from '../../../../data/sample-data1.json'
const PriorityNews = () => {
  return (
    <div className="homeSection1_2">
      <div class="flex-container">
        <div className="impImage">
          <div className="add">
            <img
              className="image"
              src="https://dummyimage.com/480x250/000/fff"
              alt=""
            />
          </div>
          {console.log("data", data)}
          <Highlighted content={data.selected} dataType={"selected"} />
        </div>
        <div className="listitems">
          <Regular content={data.selected} dataType={"selected"} />
        </div>
      </div>
    </div>
  );
};

export default PriorityNews;

// .add {
//           img {
//     min - width: 100 %;
//     min - height: 100 %;
//     object - fit: cover;
//     width: inherit;
//   }
// }