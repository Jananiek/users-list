import React, { Component } from "react";
import axios from "axios";
import UserRow from "./UserRow";
class ListViewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isAssending:true,
      error: null,
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users")
      .then(response => {
        this.setState({
          isLoaded: true,
          users: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      });
  }
  
 
  render() {
    const { error, isLoaded, users } = this.state;
      if(error){
        return <div>Error: {error.message}</div>
    }else if(!isLoaded){
        return <div>Loading...</div>;
    }else{
     return(
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name </th>
            <th>Video Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <UserRow users={users}/>
        </tbody>
      </table>
    </div>
     );
    }
 
   
  }
}
export default ListViewTable;
