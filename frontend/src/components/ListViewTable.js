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
      users: [],
      currentPage: 3,
      perPage: 25
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
  
 /**
 * show relavent page based on click event
 */
handleCurrentPage(event) {
  this.setState({
    currentPage: Number(event.target.id)
  });
}
/**
 * Show pagination
 */
pagination() {
  const { users, currentPage, perPage } = this.state;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / perPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li key={number}>
        <button id={number} onClick={(e)=>this.handleCurrentPage(e)} className={currentPage===number?'current':''}>{number}</button>
      </li>
    );
  });

  return (
    <ul className="page-numbers">
    <li key='next'>
        <button id={currentPage!==users.length/perPage?currentPage+1:currentPage} onClick={(e)=>this.handleCurrentPage(e)}>Next</button>
      </li>{renderPageNumbers}
      <li key='prev'>
      <button id={currentPage!==1?currentPage-1:currentPage} onClick={(e)=>this.handleCurrentPage(e)}>Prev</button>
    </li>
    </ul>
  );
}
  render() {
    const { error, isLoaded, users, currentPage, perPage } = this.state;
    const indexOfLastUser = currentPage * perPage;
    const indexOfFirstUser = indexOfLastUser - perPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
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
        <UserRow users={users} currentUsers={currentUsers} />
        </tbody>
      </table>
      <div className="pagination">
            {this.pagination()}
          </div>
    </div>
     );
    }
 
   
  }
}
export default ListViewTable;
