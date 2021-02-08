import React from "react";
import JsxParser from "react-jsx-parser";

// Custom Components
import SpecialTag from "../../component/SpecialTag/SpecialTag";
import SpriteImg from "../../component/SpriteImg/SpriteImg";

const SpecialComponent = (value, ref) => {
  return <JsxParser components={{ SpecialTag, SpriteImg }} jsx={value} />;
};

export default SpecialComponent;
