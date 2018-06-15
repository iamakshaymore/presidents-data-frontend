import React, { Component } from 'react';
const API_URL = "http://webapplication720180615050729.azurewebsites.net/api/president/";


export default class TableComponent extends Component{
  constructor(props){
    super(props);
    this.state={presidentsData:[]};
  }
  componentDidMount(){
  this.fetchPresidentsData(this.props.sortingType);
}

componentWillReceiveProps(nextProps){
  if(nextProps.sortingType !== this.props.sortingType){
    this.fetchPresidentsData(nextProps.sortingType);
  }
}

renderTableBody(){
  let tableBody = [];
  if(this.state.presidentsData.length > 0){
    for(let i =0;i<this.state.presidentsData.length;i++){
      let tableRow = (
        <tr className="tableContent">
        <th>{this.state.presidentsData[i].PresidentName}</th>
        <th>{this.state.presidentsData[i].BirthDay}</th>
        <th>{this.state.presidentsData[i].BirthPlace}</th>
        <th>{this.state.presidentsData[i].DeathDay}</th>
        <th>{this.state.presidentsData[i].DeathPlace}</th>
      </tr>);
      tableBody.push(tableRow);
    }
  }
  return tableBody;
}
render() {
  if(this.state.presidentsData.length > 0){
    return(
  <table className="table">
    <thead className="tableHeading">
      <tr>
        <th>President Name</th>
        <th>Birthday</th>
        <th>Birth Place</th>
        <th>Death Day</th>
        <th>Death Place</th>
      </tr>
    </thead>
    <tbody>
     {this.renderTableBody()}
    </tbody>
  </table>
  );
  }
  else{
    return null;
  }
}

async fetchPresidentsData(sortingType){
  let endpointUrl = `${API_URL}${sortingType === 'default' ? "" : sortingType}`;
  try{
 let response = await fetch(endpointUrl);
  let presidentOutput=await response.json();
      this.setState({presidentsData:presidentOutput.PresidentData});
  }
  catch(ex){
    console.log("Error while fetching data");
    this.setState({presidentsData:[]});
  }
}
}
