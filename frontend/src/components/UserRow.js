import React, { Component} from "react";
import { Link } from "react-router-dom";

class UserRow extends Component {
constructor(props){
  super(props);
}

  render() {
    const users=this.props.users;
        const tableRow = users.map(user => {
            return (
              <tr key={user.id}>
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
