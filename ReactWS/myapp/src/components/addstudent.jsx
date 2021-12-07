import axios from "axios";
import React, { Component } from "react";

class AddStudent extends React.Component {
  state = {
    student: {
      fullName: "",
      email: "",
      password: "",
      role: "",
      contactNo: "",
    },
  };
  handleChange = (event) => {
    //logic to update state object
    // console.log(student);
    // console.log(event.target.name); // name of field - fullName
    // console.log(event.target.value); // value entered in the field -a
    // student[fullName] = a;
    // student.fullName = a;

    // copy state student object to local variable student
    const student = { ...this.state.student };

    // update local student object with values entered by user
    student[event.target.name] = event.target.value;

    // update state object using setState method
    this.setState({ student: student });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // Send post request to rest api
    axios
      .post("http://localhost:8082/students", this.state.student)
      .then((res) => {
        console.log(res.data);
        alert(
          "Added student " + this.state.student.fullName + " successfully!"
        );
        this.props.history.push("/students");
      })
      .catch((err) => console.log(err));
  };

  render() {
    // Object Destructuring
    const { fullName, email, password, role, contactNo } = this.state.student;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="w-50 mx-auto shadow p-3 mb-5 bg-body rounded mt-3"
        >
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Fullname
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              aria-describedby="emailHelp"
              value={fullName}
              name="fullName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactNo" className="form-label">
              Contact No
            </label>
            <input
              type="tel"
              className="form-control"
              id="contactNo"
              aria-describedby="emailHelp"
              value={contactNo}
              name="contactNo"
              onChange={this.handleChange}
            />
          </div>
          <select
            className="form-select text-center"
            aria-label="Default select example"
            value={role}
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddStudent;
