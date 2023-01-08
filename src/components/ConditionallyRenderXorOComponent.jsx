import React from "react";
import XorO from "./XorO";
import { handleMyLetter } from "../functions/handleMyLetter";

const ConditionallyRenderXorOComponent = ({ props }) => {
  const { myLetter, setMyLetter, setAILetter } = props;
  return !myLetter ? (
    <XorO
      handlePlayerLetter={(e) => handleMyLetter(e, setMyLetter, setAILetter)}
    />
  ) : (
    ""
  );
};

export default ConditionallyRenderXorOComponent;
