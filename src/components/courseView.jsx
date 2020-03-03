import React, { useState } from "react";
import Axios from "axios";

export default function courseView() {
  const [course, loadCourses] = useState([]);
  function componentDidMount() {
    Axios.get("http://localhost/2000/admin/academics/courses")
      .then(courses => loadCourses(courses))
      .catch(err => console.log("failed to fetch data!"));
  }

  return (
    <div style={styles.courseContainer}>
      {course.map(course => {
        <div>
          <h6>Title: {course.title}</h6>
        </div>;
      })}
    </div>
  );
}
let styles = {
  courseContainer: {
    display: "flexbox",
    width: "100%"
  }
};
