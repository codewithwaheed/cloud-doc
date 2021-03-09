import React, { useState } from "react";

export default function CustomSelect(props) {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(props.selected || null);
  const { placeholderText, options, className, width, disable } = props;
  const handleActive = () => {
    if (!disable) setActive(!active);
  };
  const handleSelected = (value) => {
    if (!disable) setSelectedValue(value.text);
  };

  return (
    <>
      <div
        onClick={() => active && setActive(false)}
        className={active ? "customSelectModal" : ""}
      ></div>
      <div style={{ position: "relative" }}>
        <div
          style={{ width: width }}
          onClick={handleActive}
          className={`customSelect ${className}`}
        >
          <div className="flex">
            <span>{!selectedValue ? placeholderText : selectedValue}</span>
            <img
              src={active ? "/images/arrowUp.png" : "/images/arrowDown.png"}
              alt="arrowDown"
            ></img>
          </div>
        </div>
        {active && (
          <div onClick={handleActive} className="dropDown">
            {options.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelected(item)}
                  className="item"
                >
                  {item.text}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
