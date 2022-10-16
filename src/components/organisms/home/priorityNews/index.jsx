import React from "react";
import Highlighted from './highlited'
import Regular from "./regular";
import data from '../../../../data/sample-data1.json'
import { Link } from "react-router-dom";
const PriorityNews = () => {
  return (
    <div className="homeSection1_2">
      <div class="flex-container">
        <div className="impImage">
          <div className="add">
            <Link to='/details'>
            <img
              className="image"
              src="https://dummyimage.com/480x250/000/fff"
              alt=""
            />
            
            </Link>
          </div>
          <Highlighted content={data.selected} />
        </div>
        <div className="listitems">
          <Regular content={data.selected} />
        </div>
      </div>
    </div>
  );
};

export default PriorityNews;
