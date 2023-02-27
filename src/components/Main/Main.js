import React, { useState } from "react";
import Courses from "../Courses/Courses";
import "./Main.css";
import { html, css, js, bootstrap, react, angular, next, vue, node } from "../../images/index.js";
import Enrolled from "../Enrolled/Enrolled";

const Main = () => {
  const courses = [
    { image: html, name: "HTML5", instructor: "Franklin Hayes", price: 19.99 },
    { image: css, name: "CSS3", instructor: "Jo Ray", price: 24.99 },
    { image: js, name: "JS ES6", instructor: "Lawrence Medina ", price: 39.99 },
    { image: bootstrap, name: "Bootstrap5.3", instructor: "Gerald Chapman", price: 19.99 },
    { image: react, name: "React ", instructor: "Holly Watts", price: 34.99 },
    { image: angular, name: "Angular", instructor: "Leroy Cole", price: 33.99 },
    { image: next, name: "Next", instructor: "Kim Bailey", price: 28.99 },
    { image: vue, name: "Vue", instructor: "Lloyd Wagner", price: 32.99 },
    { image: node, name: "Node", instructor: "Keith Watson", price: 44.99 },
  ];

  const [enrolled, setEnrolled] = useState([]);

  const handleAddCourse = (clickedCourse) => {
    // console.log("course added", clickedCourse);
    const newEnrolled = [...enrolled, clickedCourse]; //previous enrolled + new clicked enrolled
    setEnrolled(newEnrolled); //assigned to enrolled
  };

  return (
    <div className="main-container">
      <div className="course-container">
        <h1 className="heading">Courses Offered by e-school</h1>
        <hr className="line" style={{ color: "cyan" }}></hr>

        {courses.map((course) => (
          <Courses course={course} handleAddCourse={handleAddCourse}></Courses>
        ))}
      </div>
      <div className="enrolled-container">
        <Enrolled enrolled={enrolled}></Enrolled>
      </div>
    </div>
  );
};

export default Main;
