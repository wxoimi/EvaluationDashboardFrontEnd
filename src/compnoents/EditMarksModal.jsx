import axios from "axios";
import React, { useState } from "react";

const EditMarksModal = (props) => {
  const [inputVals, setInputVal] = useState({
    eval: null,
    exec: null,
    viva: null,
  });

  const AssignButton = async () => {
    let response;
    if (props.post) {
      response = await axios.post(
        `https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentorId}/student/${props.studentId}/score`,
        {
          ideationScore: inputVals.eval,
          executionScore: inputVals.exec,
          vivaPatchScore: inputVals.viva,
        }
      );
    } else {
      response = await axios
        .patch(
          `https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentorId}/student/${props.studentId}/score`,
          {
            ideationScore: inputVals.eval,
            executionScore: inputVals.exec,
            vivaPatchScore: inputVals.viva,
          }
        )
        .catch((err) => {
          console.log(err.response.data);
          document.getElementById("input-card").innerHTML = `<p style="padding:40px">${err.response.data.message}</p>`
            
          response = null;
        });
    }
    if (response == null) return;
    props.closeModal();
    props.updateComponent();
  };

  const handleChange = (event) => {
    setInputVal((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  return (
    <div className="EditMarksModal">
      {/* {props.studentId}
      <br />
      {props.mentorId} */}
      <div className="EditMarksModal-shadow" onClick={props.closeModal}></div>
      <div className="input-card" id="input-card">
        <input
          type="number"
          name="eval"
          placeholder="Type you id here..."
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="number"
          name="exec"
          placeholder="Type you id here..."
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <input
          type="number"
          name="viva"
          placeholder="Type you id here..."
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button className="mentor-sel-button" onClick={AssignButton}>
          Assign Marks
        </button>
      </div>
    </div>
  );
};

export default EditMarksModal;
