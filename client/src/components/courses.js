import React, { Component } from "react";

export default class Courses extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    fetch("/api/courses")
      .then((res) => res.json())
      .then((courses) =>
        this.setState({ courses }, () =>
          console.log("Courses fetched", courses)
        )
      );
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.courses.map((course) => (
            <li key={course.id}>
              {course.id} {course.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
