import React, { Component } from "react";
import axios from "axios";
import UserRow from "./UserRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';

class ListViewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isCountLoaded:false,
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
          isCountLoaded:false,
          users: response.data,
        });
        //console.log(this.state.users);
        return axios.get('http://localhost:8000/api/videos/count')
      })
      .then(response=>{
        const usersData=response.data.map(d=>{
          return{
            id:d.user_id,
            vCount:d.total
          }
        });
        const updatedUsers=[];
        usersData.map((userData,index)=>{
          updatedUsers.push(Object.assign({},userData,this.state.users[index]));
        })
       this.setState({
         users:updatedUsers,
         isCountLoaded:true
        });
      })
      .catch(function(error) {
        console.log(error);
        this.setState({
          isLoaded: true,
          error:error
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
onSort(event, sortKey) {
  const data = this.state.users;
  if(this.state.isAssending){
    console.log(this.state.isAssending);
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({
      users: data,
      isAssending:false
    });
  }else{
    console.log(this.state.isAssending);
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey])).reverse();
  this.setState({
    users: data,
    isAssending:true
  });
  } 
}

  render() {
    const { error, isLoaded, isCountLoaded, users, currentPage, perPage } = this.state;
    const indexOfLastUser = currentPage * perPage;
    const indexOfFirstUser = indexOfLastUser - perPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
      if(error){
        return <div>Error: {error.message}</div>
    }else if(!isLoaded){
        return <div className="loading col-12"><h3>Loading...<FontAwesomeIcon icon={faSpinner}  spin  /></h3></div>;
    }else{
     return(
      <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th><FontAwesomeIcon icon={faSort}  className="m-r-5" onClick={(e)=>this.onSort(e,'fname')}/><span></span>First Name</th>
            <th><FontAwesomeIcon icon={faSort}  className="m-r-5" onClick={(e)=>this.onSort(e,'lname')}/><span></span>Last Name </th>
            <th>Video Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        <UserRow users={users} isCountLoaded={isCountLoaded} currentUsers={currentUsers} />
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
