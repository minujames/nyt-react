import React from 'react';
import Article from '../Article'

const SearchResults = props => {

  return (<div className='container'>
    <div className='panel panel-primary'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Results</h3>
      </div>
      <ul className="list-group">
      {
        (props.articles.length) ?
          props.articles.map((article, index) =>(
            <Article 
              headLine = {article.headline.main}
              publishedDate = {article.pub_date}
              url = {article.web_url}
              key = {index}
              saved = {false}
            />
          )) :
        <li className="list-group-item">
          <h4>No Results Found</h4>
        </li>
      }
      </ul>
    </div>
  </div>);
};


export default SearchResults;