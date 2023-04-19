import React, { useState } from 'react';
import MentorSelect from './MentorSelect';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

const Homepage = (props) => {
    const navigate = useNavigate();
	

	const verifyAndSet = (mentorId) => {
		props.setMentor(mentorId);
        navigate("/");
	};

	const resetMentor = () => {
		props.setMentor(null);
        navigate('/');
	};

    const navLinkStyles = {
		color: '#6A63F5',
		textDecoration: 'none',
		marginLeft: '20px',
	};

	return (
		<div className="app">
			{!props.mentor ? (
				<MentorSelect verifyAndSet={verifyAndSet} />
			) : (
				<div className="mentor-dash-con">
					<div className="nav-con">
						<div className="nav">
							<NavLink to="student-assign" style={navLinkStyles}>
								Assign Student
							</NavLink>
							<NavLink to="marks-assign" style={navLinkStyles}>
								Assign Marks
							</NavLink>
						</div>
						<div className='nav-extras'>
							<p>Current mentor id: {props.mentor}</p>
							<button onClick={resetMentor} className='mentor-sel-button change-mentor'>Change Mentor</button>
						</div>
					</div>

					<Outlet />
				</div>
			)}
		</div>
	);
};

export default Homepage;
