import React, { useState } from "react";

const MentorSelect = (props) => {
  const [inputData, setInputData] = useState("");

  function handleChange(event) {
    setInputData(event.target.value);
    console.log(inputData);
  }

  return (
    <div className="mentor-select-con" id="mentor-select-con">
      <div className="input-card">
        <div>
          <p>Enter Mentor ID</p>
        </div>

        <input
          type="number"
          placeholder="Type you id here..."
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          className="mentor-sel-button"
          onClick={() => {
            props.verifyAndSet(inputData);
          }}
        >
          Go to Dashboard
        </button>
        <p className="demo">For demo purposes use id as: 1</p>
      </div>
    </div>
  );
};

export default MentorSelect;
