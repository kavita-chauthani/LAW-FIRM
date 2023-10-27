import React, { useState } from "react";
import { questions } from "./api";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data, setData] = useState(questions);
  return (
    <div className="main">
      <section className="main-div">
        {data.map((curElem) => {
          const { id } = curElem;
          return <MyAccordion key={id} {...curElem} />;
        })}
      </section>
    </div>
  );
};

export default Accordion;
