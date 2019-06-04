import React, { Component} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class UserRow extends Component {
constructor(props){
  super(props);
}
  render() {
    
    const {currentUsers,isCountLoaded}=this.props; 
    const element=<FontAwesomeIcon icon={faSpinner} spin  />
    const tableRow = currentUsers.map((user,index) => {
            return (
            
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{isCountLoaded ? user.vCount: element}</td>
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
