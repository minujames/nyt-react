import React, { Component } from "react";
import API from '../../utils/API';
import SearchResults from '../SearchResults'


class Search extends Component {
  state = {
    topic: "Christmas",
    startYear: "2015",
    endYear: "2017"
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.topic, this.state.startYear, this.state.endYear)
    .then((res) => {
      this.setState({ articles: res.data.response.docs})
    })
  }

  render() {
    return (
      <div>
      <div className="container">
        <div className="panel panel-primary">
          <div className="panel-heading">
          Search For Articles
          </div>
          <div className="panel-body">
            <form> 
            <div className="form-group">
              <label>Topic</label>
              <input className="form-control"
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic"/>
            </div>
            <div className="form-group">
              <label>Start Year</label>
              <input className="form-control"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year"/>
            </div>
            <div className="form-group">
              <label>End Year</label>
              <input className="form-control"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year"/>
            </div>
              <button className="btn btn-primary"
                onClick={this.handleFormSubmit}
                type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {this.state.articles ? 
        <SearchResults articles = {this.state.articles} /> :
        <div className="container">
          <h4>Enter Search terms to begin...</h4>
        </div>
      }
      </div>
    );
  }
}

export default Search;