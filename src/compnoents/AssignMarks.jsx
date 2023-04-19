import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const AssignMarks = (props) => {
  const sel = props.selected;

  const navLinkStyles = {
    color: "#6A63F5",
    textDecoration: "none",
    marginLeft: "20px",
	padding: "20px",
	minWidth: "100px"
};

const navLinkStylesSelected = {
	backgroundColor: "#6A63F5",
	color: "white",
    textDecoration: "none",
    marginLeft: "20px",
	padding: "20px",
	borderRadius: "30px",
	minWidth: "100px"
  };

  return (
    <div className="student-assign-con">
      <div className="student-nav">
        <NavLink
          to="all-students"
          style={sel === "all" ? navLinkStylesSelected : navLinkStyles}
        >
          All Students
        </NavLink>
        <NavLink
          to="assigned-students"
          style={sel === "ass" ? navLinkStylesSelected : navLinkStyles}
        >
          Assigned Students
        </NavLink>
        <NavLink
          to="unassigned-students"
          style={sel === "uns" ? navLinkStylesSelected : navLinkStyles}
        >
          Unassigned Students
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AssignMarks;
