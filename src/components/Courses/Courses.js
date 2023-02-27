import React from "react";
import "./Courses.css";

const Courses = (props) => {
  // console.log(props);
  const { image, name, instructor, price } = props.course;
  return (
    <div className="courses">
      <div className="image-section">
        <img className="image" src={image} alt="" />
      </div>
      <div className="course-name">
        <h3>Course Title: {name} </h3>
        <h5>By {instructor}</h5>
        <h5> ${price}</h5>
        <br />
        <br />
        <button className="enroll-button" onClick={() => props.handleAddCourse(props.course)}>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
