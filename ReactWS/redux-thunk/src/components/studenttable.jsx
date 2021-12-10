import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class StudentTable extends React.Component {
  render() {
    const { students, handleDelete } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>RollNo</th>
              <th>Fullname</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Role</th>
              {this.props.login.loggedIn &&
                this.props.login.role == "admin" && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.rollNo}>
                <td>{s.rollNo}</td>
                <td>{s.fullName}</td>
                <td>{s.login.email}</td>
                <td>{s.contactNo}</td>
                <td>{s.login.role}</td>
                {this.props.login.loggedIn && this.props.login.role == "admin" && (
                  <td>
                    <Link
                      to={`/students/update/${s.rollNo}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(s.rollNo)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(StudentTable);
