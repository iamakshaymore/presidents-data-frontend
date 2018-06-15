import React, { Component } from 'react';
import '../styles.css';
import TableComponent from './TableComponent.js';

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={ sortingType:'default'};
    this.sortingTypeSelect = this.sortingTypeSelect.bind(this);
  }

  render() {
    return (
      <div className="page-content">
      <div className="sorting-div">
      <div className="text-header">
      Sorting Type:
      </div>
      <div className="input-div">
      <div id="check-box-view" style={{display:"inline-flex"}}>
      <div style={{display:"inline-flex"}}>
      <input id="def" type='radio' onChange={this.sortingTypeSelect} checked={this.state.sortingType === 'default' ? true:false}/>
      <div className="sortingTypeButton">Default</div>
      </div>
      <div style={{display:"inline-flex"}}>
      <input id="asc" type='radio' onChange={this.sortingTypeSelect} checked={this.state.sortingType === 'ascending' ? true:false}/>
      <div className="sortingTypeButton">Ascending</div>
      </div>
      <div style={{display:"inline-flex"}}>
      <input id="desc" type='radio' onChange={this.sortingTypeSelect} checked={this.state.sortingType === 'descending' ? true:false}/>
      <div className="sortingTypeButton">Descending</div>
      </div>
      </div>
      </div>
      </div>
      <TableComponent sortingType={this.state.sortingType}/>
            </div>
    );
  }

  sortingTypeSelect(e){
    switch(e.currentTarget.id){
      case 'def':
      this.setState({sortingType:'default'});
      break;
      case 'asc':
      this.setState({sortingType:'ascending'});
      break;
      case 'desc':
      this.setState({sortingType:'descending'});
      break;
      default:
      this.setState({sortingType:'default'});
      break;
    }
  }
}

export default Homepage;
