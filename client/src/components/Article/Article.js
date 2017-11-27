import React, { Component } from "react";
import API from '../../utils/API';

class Article extends Component {

constructor(props) {
  super(props);
  this.state = props;
}

handleSaveArticle = event => {
  API.saveArticle({
    headLine: this.state.headLine,
    url: this.state.url,
    publishedDate: this.state.publishedDate
  });
}

handleRemoveArticle = event => {
  API.removeArticle(this.state._id)
  .then(res => this.state.loadArticles())
  .catch(err => console.log(err));
}
 
render (){
  return(
    <li className="list-group-item">
      <h4>{this.state.headLine}</h4> 
        <a href={this.state.url} target='_blank' className="pull-right">
          <button className='btn btn-info'>View Article</button>
        </a>
        {(this.state.saved) ? 
          <button className='btn btn-danger pull-right article-btn' 
            onClick= {this.handleRemoveArticle}>Remove Article</button> :
          <button className='btn btn-primary pull-right article-btn' 
            onClick= {this.handleSaveArticle}>Save Article</button>
        }    
      <p>Date Published: {this.state.publishedDate} </p>
    </li>
    );
  }
}

export default Article;