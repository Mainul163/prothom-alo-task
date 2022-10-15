import { useState, useEffect } from "react";
import Subtitle from "../../../atoms/typography/subtitle.jsx";

const Tab = ({ content }) => {
  const [toggleState, setToggleState] = useState(1);

  useEffect(() => {}, []);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="tab">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          <p className="tabTitle"> {content.latest.name}</p>
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <p className="tabTitle">{content.mostread.name}</p>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <p className="tabTitle">{content.discussed.name}</p>
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ul>
            {content.latest.items
              .sort((a, b) => a.sort - b.sort)
              .map((e, i) => (
                <li key={i}>
                  <div className="tab-Item">
                    <span className="order">{(i+1).toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])}</span>
                    <p className="headline">{e.headline}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ul>
            {content.mostread.items
              .sort((a, b) => a.sort - b.sort)
              .map((e, i) => (
                <li key={i}>
                  <div className="tab-Item">
                    <span className="order">{(i+1).toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])}</span>
                    <p className="headline">{e.headline}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <ul>
            {content.discussed.items
              .sort((a, b) => a.sort - b.sort)
              .map((e, i) => (
                <li key={i}>
                <div className="tab-Item">
                  <span className="order">{(i+1).toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])}</span>
                  <p className="headline">{e.headline}</p>
                </div>
              </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
