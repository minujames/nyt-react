import React, { Component } from "react";

class Search extends Component {
  state = {
    title: "",
    startDate: "",
    endDate: "",
    articles: []
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
          Search For Articles
          </div>
          <div className="panel-body">
            <form> 
            <div className="form-group">
              <label>Title</label>
              <input className="form-control"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"/>
            </div>
            <div className="form-group">
              <label>Start Date</label>
              <input className="form-control"
                value={this.state.startDate}
                onChange={this.handleInputChange}
                name="startDate"
                placeholder="Start Date"/>
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input className="form-control"
                value={this.state.endDate}
                onChange={this.handleInputChange}
                name="endDate"
                placeholder="End Date"/>
            </div>
              <button className="btn btn-primary">
                Submit Book
              </button>
            </form>
          </div>
        </div>
      </div>
      );
  }
}


export default Search;