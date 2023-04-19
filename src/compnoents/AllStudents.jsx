import React, { useState, useEffect } from "react";
import axios from "axios";

const AllStudents = (props) => {
  useEffect(() => {
    props.setSelected("all");
    props.setCount((old)=>{
      return old + 1;
    })
  }, []);


  return (
    <div className="all-student-con">
      {props.allStudents.map((item) => {
        return <div className="all-card">
          <div>Student Name: {item.name}</div>
          <div>Student Id: {item.id}</div>
        </div>;
      })}
    </div>
  );
};

export default AllStudents;
