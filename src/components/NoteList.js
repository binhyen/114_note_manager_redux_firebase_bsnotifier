import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteConnect} from './firebaseConnect';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase:[]
        }
    }
    
    componentWillMount() {
        noteConnect.on('value',(notes) => {
            var arrayData = [];
            notes.forEach(element => {
                const key = element.key;
                const noteTitle = element.val().noteTitle;
                const noteContent = element.val().noteContent;
                arrayData.push({
                    id:key,
                    noteTitle:noteTitle,
                    noteContent:noteContent
                })
            });
            this.setState({
                dataFirebase:arrayData
            });           
        })
    }
    
    getData = () => {
        // console.log(this.state.dataFirebase);
        if(this.state.dataFirebase) {
            
            
            return this.state.dataFirebase.map((value,key) => {
                return (
                    <NoteItem
                    key={key}
                    index={key}
                    id={value.id}
                    item={value}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}
                    ></NoteItem>
                )
            });
        }
    }

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
        );
    }
}

export default NoteList;