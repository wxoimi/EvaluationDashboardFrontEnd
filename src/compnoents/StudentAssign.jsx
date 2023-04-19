import React, { useState } from "react";
import AllStudents from "./AllStudents";
import axios from "axios";

const StudentAssign = (props) => {
  const [inputData, setInputData] = useState(null);

  function handleChange(event) {
    setInputData(event.target.value);
    console.log(inputData);
  }

  async function assign() {
    await axios
      .post(
        `https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentor}/student/${inputData}`
      )
      .catch((err) => {
        alert(err.response.data.message);
      });
    props.setCount((old) => {
      return old + 1;
    });

    // setInputData(null);
  }

  async function unassign() {
    await axios
      .delete(
        `https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentor}/student/${inputData}`
      )
      .catch((err) => {
        console.log(err.data);
        alert(err.response.data.message);
      });
    props.setCount((old) => {
      return old + 1;
    });

    // setInputData(null);
  }

  return (
    <div className="student-assignmnet-con">
      <div className="left">
        <h1
          style={{
            margin: "30px",
          }}
        >
          Assigned Students
        </h1>
        <AllStudents
          setSelected={props.setSelected}
          mentor={props.mentor}
          inputData={inputData}
          allStudents={props.allStudents}
          setAllStudents={props.setAllStudents}
          setCount={props.setCount}
        />
      </div>
      <div className="right">
        <div className="stu-card input-card">
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
              assign();
              // setInputData(null);
            }}
          >
            Assign
          </button>
          <button
            className="mentor-sel-button"
            onClick={() => {
              unassign();
              // setInputData(null);
            }}
          >
            Unassign
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAssign;
