import React from "react";

const Enrolled = (props) => {
  const { image, name, instructor, price } = props.enrolled;
  console.log(props.enrolled);

  const courseFee = () => {
    if (props.enrolled.length === 0) {
      return 0;
    } else {
      return props.enrolled[props.enrolled.length - 1].price;
    }
  };

  let total = 0;
  for (let i = 0; i < props.enrolled.length; i++) {
    const singleCourse = props.enrolled[i];
    total += singleCourse.price;
  }

  total = Number(total).toFixed(2);

  return (
    <div>
      <h1>Enrolled Summery</h1>
      <br />
      <h2>Enrolled Courses: {props.enrolled.length}</h2>
      <h3>Course Fee: ${courseFee()}</h3>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Enrolled;
