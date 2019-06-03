import React, { Component} from "react";
import { Link } from "react-router-dom";

class UserRow extends Component {
constructor(props){
  super(props);
}

  render() {
    const currentUsers=this.props.currentUsers;
    const tableRow = currentUsers.map((user,index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.v_count}</td>
                <td>
                  <Link to={`user/${user.id}`}>View</Link>
                </td>
              </tr>
            );
          });
      
          return tableRow;
   
  }
}
export default UserRow;
