import React from "react";

export default function UserProfile(props) {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-8 m-auto">
          <div className="table-responsive profile-details">
            <div className="page-title">
              <h3>User Profile details</h3>
            </div>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td className="title">Full Name</td>
                  <td className="detail">
                    {props.profile.fname + " " + props.profile.lname}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
