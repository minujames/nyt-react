import React, { Component } from "react";
import API from '../../utils/API';
import Modal from "react-modal";

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

class Notes extends Component {

constructor(props) {
  super(props);

  this.state = {
    notes: [],
    articleId: props.articleId,
    modalIsOpen: true,
    resetModalState: props.resetModalState,
    note: ""
  }
}

componentDidMount(){
  this.loadNotes();
}

loadNotes = () => {
  API.getArticleNotes(this.state.articleId)
  .then(res => {
    this.setState({
      notes: res.data.notes
    })
  })
  .catch(err => console.log(err))
}

handleInputChange = event => {
  const newNote = event.target.value;
  this.setState({
    note: newNote
  });
}

handleAddNote = event => {
  if(this.state.note){
    API.addArticleNote(this.state.articleId, {note: this.state.note});
    this.closeModal();
  }
}

handleRemoveNote = event => {
  const noteId = event.target.getAttribute('data-id');
  API.removeArticleNote(noteId, this.state.articleId);
  this.closeModal();
}

closeModal  = () => {
  this.setState({modalIsOpen: false});
  this.state.resetModalState();
}
 
render (){
  return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Notes">

        <ul className="list-group">
        {this.state.notes.map((note, index) => (
          <li className="list-group-item"
              key={index}>
            <button className="btn btn-danger pull-right" 
                    onClick={this.handleRemoveNote}
                    data-id={note._id}>X
            </button>
            <p>{note.note}</p>
          </li>
        ))}
        </ul>

        <textarea placeholder="New Note" 
                  rows={5} 
                  cols={78} 
                  value={this.state.note}
                  onChange={this.handleInputChange}>
        </textarea>
        <p>
          <button className="btn btn-success article-btn" onClick={this.handleAddNote}>Save Note</button>
          <button className="btn btn-primary" onClick={this.closeModal}>close</button>
        </p>
      </Modal>
    );
  }
}

export default Notes;