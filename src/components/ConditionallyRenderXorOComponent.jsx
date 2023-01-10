import React, { useContext } from "react";
import { AppContext } from "../appStateAndFunctions";
import XorO from "./XorO";

const ConditionallyRenderXorOComponent = () => {
  const { myLetter } = useContext(AppContext);
  return !myLetter ? <XorO /> : "";
};

export default ConditionallyRenderXorOComponent;
