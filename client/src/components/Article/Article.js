import React, { Component } from "react";
import API from '../../utils/API';
import Modal from "react-modal";
import Notes from "../Notes";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Article extends Component {

constructor(props) {
  super(props);

  this.state = {
    ...props,
    messageModalIsOpen: false,
    notesModalIsOpen: false,
    message: ""
  }
}

handleSaveArticle = event => {
  API.saveArticle({
    headLine: this.state.headLine,
    url: this.state.url,
    publishedDate: this.state.publishedDate
  })
  .then(res => {
    this.setState({message: "Article Saved Successfully!"})
    this.openModal()
  })
  .catch(err => {
    if(err.toString().includes("422")){
      this.setState({message: "Already Saved Article!"})
      this.openModal()
    }
  });
}

handleRemoveArticle = event => {
  API.removeArticle(this.state._id)
  .then(res => this.state.loadArticles())
  .catch(err => console.log(err));
}

handleShowCommentsModal = event => {
  this.setState({notesModalIsOpen: true});
}

resetNotesModalState = () => {
  this.setState({notesModalIsOpen: false})
}

openModal = () => {
  this.setState({messageModalIsOpen: true});
}

closeModal  = () => {
  this.setState({messageModalIsOpen: false});
}
 
render (){
  return(
    <li className="list-group-item">
      <h4>{this.state.headLine}</h4> 
        <a href={this.state.url} target='_blank' className="pull-right">
          <button className='btn btn-info'>View Article</button>
        </a>
        {(this.state.saved) ? 
          (
            <span><button className='btn btn-danger pull-right article-btn' 
            onClick= {this.handleRemoveArticle}>Remove Article</button> 
            <button className='btn btn-primary pull-right article-btn' 
            onClick= {this.handleShowCommentsModal}>Comments</button>
            </span> 
          ):
          <button className='btn btn-primary pull-right article-btn' 
            onClick= {this.handleSaveArticle}>Save Article</button>
        }    
      <p>Date Published: {this.state.publishedDate} </p>

      {this.state.notesModalIsOpen ? 
        <Notes articleId={this.state._id} 
               resetModalState={this.resetNotesModalState}></Notes> :
        null
      }

      <Modal
        isOpen={this.state.messageModalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h3>{this.state.message}</h3>
        <button onClick={this.closeModal}>close</button>
      </Modal>
    </li>
    );
  }
}

export default Article;