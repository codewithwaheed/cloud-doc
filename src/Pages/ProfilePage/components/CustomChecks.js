import React, { useState } from "react";

export default function CustomChecks(props) {
  const [check, setCheck] = useState(false);
  const { value1, value2 } = props;
  return (
    <div className="customRadioDiv">
      <div onClick={() => setCheck(false)} className="radioDiv">
        <div
          className={
            check === true ? "radioCircle" : "radioCircle radioCircleActive"
          }
        ></div>
        <div className="radioLable">{value1}</div>
      </div>
      <div onClick={() => setCheck(true)} className="radioDiv">
        <div
          className={
            check === true ? "radioCircle radioCircleActive" : "radioCircle "
          }
        ></div>
        <div className="radioLable">{value2}</div>
      </div>
    </div>
  );
}
