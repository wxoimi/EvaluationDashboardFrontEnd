import React, { useState, useEffect } from "react";
import EditMarksModal from "./EditMarksModal";
import axios from "axios";

const AssignedStudents = (props) => {
  const [state, updateState] = useState(0);
  useEffect(() => {
    props.setSelected("ass");
    axios
      .get(`https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentor}/students/all`)
      .then((response) => {
        setAssignedStudents(
          response.data.data.filter((item) => {
            return item.Score != null;
          })
        );
      });
  }, [state]);

  function changeState() {
    updateState((old) => {
      return old + 1;
    });
  }

  async function lockAll() {
    await axios
      .post(`https://evaluationdashboardbackend.onrender.com/api/v1/mentor/${props.mentor}/lock`)
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  const [assignedStudents, setAssignedStudents] = useState([]);

  const [currentStudent, setCurrentStudent] = useState({
    studdentId: null,
    mentorId: null,
  });

  const [modalOpened, setModalOpened] = useState(false);

  const closeModal = () => {
    setModalOpened(false);
  };

  let data = assignedStudents;

  const studentCards = data.map((item) => {
    return (
      <>
        <div
          className="student-card"
          onClick={() => {
            setModalOpened(true);
            setCurrentStudent({ studdentId: item.id, mentorId: item.mentorId });
          }}
        >
          <div className="card-top">
            {item.name} {item.id}
          </div>
          <div className="card-bottom">
            <div>IdeationScore: {item.Score.IdeationScore}</div>
            <div>ExecutionScore: {item.Score.ExecutionScore}</div>
            <div>VivaPatchScore: {item.Score.VivaPatchScore}</div>
            <div>Total: {item.Score.total}</div>
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="assigned-stu-con">
      {modalOpened && (
        <EditMarksModal
          closeModal={closeModal}
          studentId={currentStudent.studdentId}
          mentorId={currentStudent.mentorId}
          updateComponent={changeState}
          post={false}
        />
      )}
      {studentCards}
      <button className="mentor-sel-button submit-all" onClick={lockAll}>
        Submit All
      </button>
    </div>
  );
};

export default AssignedStudents;
