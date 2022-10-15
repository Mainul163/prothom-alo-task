import React from "react";
import ProthomAlo from "../../components/atoms/icons/prothomAlo";
import "../../assets/styles/style.scss";

const DefaultLayout = (props) => {
  return (
    <>
      <div className="header">
        <div className="topNav">
        <div className="icon">
          <ProthomAlo />
        </div>
       
        </div>
        <div className="container">{props.children}</div>
      </div>
      
    </>
  );
};

export default DefaultLayout;
