import React, { useState } from "react";
import { InputDiv } from "../../PatientLogin/PatientLoginPage";
import CustomChecks from "../../ProfilePage/components/CustomChecks";

export default function WhoSeeingDoctor() {
  const data = [{ name: "Jake Blake" }];

  const [patientData, setPatientData] = useState(data);
  const [activePatient, setactivePatient] = useState("Jake Blake");
  const [activeModal, setActiveModal] = useState(false);

  const handleModalCallBack = (dataObject) => {
    var newData = [...patientData, dataObject];
    console.log(dataObject);
    setPatientData(newData);
    setActiveModal(false);
  };
  return (
    <div>
      <div className="inputDiv">
        {activeModal && (
          <AddPatientModal
            onClose={() => setActiveModal(false)}
            callBack={handleModalCallBack}
          />
        )}
        <label className="label">Who will be seeing the doctor?</label>
        <div className="bg-white p-3 inputStyle">
          {patientData.map((item, index) => {
            return (
              <div
                onClick={() => setactivePatient(item.name)}
                key={index}
                className={
                  activePatient === item.name
                    ? "checkDiv checkDivActive"
                    : "checkDiv"
                }
              >
                <div className="checkCircle"></div>
                <div className="text">{item.name}</div>
              </div>
            );
          })}
          <div onClick={() => setActiveModal(true)} className="actionText">
            Someone else
          </div>
        </div>
      </div>
    </div>
  );
}

const AddPatientModal = ({ onClose, callBack }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (!firstName || !lastName) {
      return;
    }
    var dataObject = { name: firstName + " " + lastName, email };
    callBack(dataObject);
  };
  return (
    <div onClick={onClose} className="mainModal">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="patientModalDiv"
      >
        <div className="w-100" onClick={onClose}>
          <img
            src="/images/close.png"
            className="float-right pointer"
            style={{ width: "15px" }}
          ></img>
        </div>
        <div className="inputDiv">
          <label className="label">Patient's name</label>
          <div className="d-flex">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              className="textInput"
              placeholder="First"
            ></input>
            <input
              onChange={(e) => setLastName(e.target.value)}
              className="textInput"
              placeholder="Last"
            ></input>
          </div>
        </div>
        <InputDiv
          onChange={(val) => setEmail(val)}
          label="Patient's email (optional)"
        />
        <div className="inputDiv">
          <label className="label">Patient's date of birth</label>
          <div className="d-flex">
            <input className="textInput" maxLength="2" placeholder="MM"></input>
            <input className="textInput" maxLength="2" placeholder="DD"></input>
            <input
              className="textInput"
              maxLength="4"
              placeholder="YYYY"
            ></input>
          </div>
        </div>
        <div className="inputDiv">
          <label className="label">
            Are you the parent or legal guardian of this patient?
          </label>
          <CustomChecks value1="Yes" value2="No" />
        </div>
        <div className="inputDiv">
          <label className="label">Patient's sex</label>

          <CustomChecks value1="Male" value2="Femail" />
        </div>

        <div>
          <button
            onClick={handleContinue}
            className=" loginBtn signUpButton mb-2"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
