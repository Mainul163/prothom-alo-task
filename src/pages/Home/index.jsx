import React from "react";
import DefaultLayout from "../../layout/default";
import Tab from "../../components/organisms/home/tab";
import PriorityNews from "../../components/organisms/home/priorityNews";
import data from "../../data/sample-data1.json";
const Home = () => {
  return (
    <DefaultLayout>

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
          <img
            src="https://dummyimage.com/991x250/000/fff"
            alt=""
          />
        </div>


      </div>
    </DefaultLayout>
  );
};

export default Home;
