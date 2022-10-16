import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/default";
import Details from "../../components/organisms/details";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../data/sample-data1.json";

const DetailsContainer = () => {
  let { type, id } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState();
  useEffect(() => {
    let temp = "";
    let x = Object.entries(data);
    x.forEach((e) => {
      if (e[0] === type) {
        setContent(e[1]);
        temp = e[1];
      }
    });

    if (temp === "") {
      navigate("/");
    } else {
      temp.items.forEach((e) => {
        if (e.id == id) {
          setContent(e);
        }
      });
    }
  }, []);

  return (
    <DefaultLayout>{content && <Details content={content} />}</DefaultLayout>
  );
};

export default DetailsContainer;
