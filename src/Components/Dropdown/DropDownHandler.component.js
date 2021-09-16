import React, { useState } from "react";
import Dropdown,{ Option } from "./Dropdown.component.js";

export const DropDown = () => {
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };
  return (
    <div>
      <Dropdown
        onChange={handleSelect}
        action="/"
      >
        <Option selected value="Bhubaneshwar" />
        <Option value="Bhubaneshwar" />
        <Option value="Nagpur" />
        <Option value="Delhi" />
      </Dropdown>
    </div>
  );
};

export default DropDown;