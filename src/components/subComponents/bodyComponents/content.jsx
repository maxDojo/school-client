import React, { Component } from "react";
import InfoUnit from "./infoUnit";
import Axios from "axios";

class Content extends Component {
  state = {courses: []};
  componentDidMount() {
    Axios.get('http://localhost:2000/admin/academics/courses').then(res=>{this.setState({courses: res})}).catch(err=>console.log('Failed to fetch courses')
  }
  render() {
    return (
      <div className='card-group'>
      {this.state.courses.map(course=>{
        <InfoUnit image='http://picsum.photo/200/200' title={course.title} details={[course.code, course.credit, course.created]}/>

      })}
      </div>
    );
  }
}

export default Content;
