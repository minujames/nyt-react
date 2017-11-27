import React, { Component } from "react";
import API from '../../utils/API';
import Article from '../Article'

class Saved extends Component{
  state = {
    savedArticles : []
  }

  componentDidMount(){
    this.loadArticles();
  };

  loadArticles = () => {
    API.getSavedArticles()
    .then(res => {
      this.setState({savedArticles: res.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <ul className="list-group">
            {
              this.state.savedArticles.length ?
                (this.state.savedArticles.map ((article) => (
                  <Article 
                    {...article}
                    key = {article._id}
                    saved = {true}
                    loadArticles = {this.loadArticles}
                  />
                ))) : 
              <li className="list-group-item"> 
                <h4>No Saved Articles</h4>
              </li>
            }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;