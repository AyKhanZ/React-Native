import React, { useState } from "react";
import InputIcon from "./InputIcon";

const InputIcons = () => {
  const [inputIcons, setinputIcons] = useState(["Luggage", "Time"]);

  function drawInputIcons() {
    return inputIcons.map((inputIcon, i) => (
      <InputIcon key={i} title={inputIcon} />
    ));
  }

  return drawInputIcons();
};

export default InputIcons;
