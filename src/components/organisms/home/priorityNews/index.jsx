import React from "react";
import Highlighted from './highlited'
import Regular from "./regular";
import data from '../../../../data/sample-data1.json'
const PriorityNews = () => {
  return (
    <div className="homeSection1_2">
      <div class="flex-container">
        <div className="impImage">
          {console.log({data})}
          <Highlighted content={data.selected}/>
        </div>
        <div className="listitems">
          <Regular content={data.selected}/>
        </div>
      </div>
    </div>
  );
};

export default PriorityNews;
