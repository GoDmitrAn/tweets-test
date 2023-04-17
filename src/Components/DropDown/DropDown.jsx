import React, { useState } from "react";
import { MainBox, ToggleBtn, DropMenu, DropMenuItem } from "./DropDown.styled";

export const Dropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <MainBox>
      <ToggleBtn onClick={() => setIsOpen(!isOpen)}>{value}</ToggleBtn>
      {isOpen && (
        <DropMenu>
          {options.map((option) => (
            <DropMenuItem
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropMenuItem>
          ))}
        </DropMenu>
      )}
    </MainBox>
  );
};
