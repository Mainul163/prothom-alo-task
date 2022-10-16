import React from "react";
import DefaultLayout from "../../layout/default";
import Tab from "../../components/organisms/home/tab";
import PriorityNews from "../../components/organisms/home/priorityNews";
import data from "../../data/sample-data1.json";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <DefaultLayout>
      {/* <div className="homeSection1">
          <div className="leftbox">
            <Tab content={data}/>
          </div>

          <div className="middlebox">
            <h2>GeeksforGeeks:</h2>
            The course focuses on various MCQ's & Coding question likely to be
            asked in the interviews & make your upcoming placement season
            efficient and successful.
          </div>

          <div className="rightbox">
            <h2>Contribute:</h2>
            Any geeks can help other geeks by writing articles on the
            GeeksforGeeks, publishing articles follow few steps that are
            Articles that need little modification/improvement from reviewers
            are published first.
          </div>
        </div> */}
      <div className="homeSection1">
        <div class="grid-container">
          <div className="left">
            {" "}
            <Tab content={data} />
          </div>
          <div className="middle">
            <PriorityNews />
          </div>
        </div>

        <div className="footerAdd">
         <Link to='/details'>
         <img
            src="https://dummyimage.com/991x250/000/fff"
            alt=""
          />
         
         </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
