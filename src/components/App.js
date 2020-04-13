import React, { Component } from 'react';
import './../css/App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteConnect} from './firebaseConnect'
import AlertInfo from './AlertInfo';
// import * as firebase from 'firebase'
class App extends Component  {

  pushDataToFirebase = (item) => {
    // console.log("yen debug"+JSON.stringify(item));
    // const dataConnect = firebase.database().ref('dataJson');
    noteConnect.push(item);
  }

  
  componentWillMount() {
    // const dataArray = [];
    // // noteConnect.once('value').then(function(snapshot){
    // //   console.log(snapshot.val());
      
    // // });
    // noteConnect.on('value', function(snapshot){
    //   // console.log(snapshot.val());
    //   snapshot.forEach(Element => {
    //     // console.log(Element.val());
    //     dataArray.push(Element.key);
        
    //   })
    // });
    
  }
  

  render() {
    return (
      <div>
        <Nav></Nav>
        <AlertInfo></AlertInfo>
        <div className="container">
          <div className="row">
            <NoteList></NoteList>
            <NoteForm pushDataToFirebase={(item) => this.pushDataToFirebase(item)}></NoteForm>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
