import React from "react";
import JsxParser from "react-jsx-parser";

// Layout
import Layout from "../hoc/LayoutWFilter/Layout";

// CustomComponent
import SpecialTag from "../component/SpecialTag/SpecialTag";
import SpriteImg from "../component/SpriteImg/SpriteImg";

// Data
import dataRaw from "../data/lor_data.json";

const CustomComponent = (value: string) => {
  return <JsxParser components={{ SpecialTag, SpriteImg }} jsx={value} />;
};

export default function ProcessDescription() {
  return (
    <Layout>
      {dataRaw.map((item, index) => (
        <div key={index} className="customCard">
          <p>{item.cardCode}</p>
          <p>{item.name}</p>
          <p>{item.descriptionNew}</p>
          <p>{item.description}</p>
          <>{CustomComponent(item.descriptionNew)}</>
        </div>
      ))}
    </Layout>
  );
}
