import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Student extends React.Component {
  state = {
    students: [],
  };

  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get("http://localhost:8082/students")
      .then((res) => {
        console.log(res);
        this.setState({ students: res.data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDelete = (rollNo) => {
    //axios.delete("http://localhost:8082/students/" + rollNo);
    axios
      .delete(`http://localhost:8082/students/${rollNo}`)
      .then((res) => {
        console.log(res);
        // Update front end parallely
        const students = this.state.students.filter((s) => s.rollNo != rollNo);
        this.setState({ students: students });
        alert(res.data.fullName + " deleted succussfully!");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="w-75 mx-auto">
        <Link to="/students/add" className="btn btn-info float-end">
          Add
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((s) => (
              <tr>
                <td>{s.rollNo}</td>
                <td>{s.fullName}</td>
                <td>{s.login.email}</td>
                <td>{s.contactNo}</td>
                <td>{s.login.role}</td>
                <td>
                  <Link
                    to={`/students/update/${s.rollNo}`}
                    className="btn btn-primary"
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(s.rollNo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Student;
