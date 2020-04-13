import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id:''
        }
    }

    componentWillReceiveProps(nextProps, nextState) {
        // this.setState({
        //     noteTitle:nextProps.noteTitle,
        //     noteContent:nextProps.noteContent
        // });
        console.log("#yen debug :"+JSON.stringify(this.state.noteTitle));
        
        console.log("componentWillReceiveProps nextProps:"+JSON.stringify(nextProps));
        console.log("componentWillReceiveProps nextState:"+JSON.stringify(nextState));
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("#yen debug :"+JSON.stringify(this.state.noteTitle));
        console.log("shouldComponentUpdate nextProps:"+JSON.stringify(nextProps));
        console.log("shouldComponentUpdate nextState:"+JSON.stringify(nextState));
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("#yen debug :"+JSON.stringify(this.state.noteTitle));
        console.log("componentWillUpdate nextProps:"+JSON.stringify(nextProps));
        console.log("componentWillUpdate nextState:"+JSON.stringify(nextState));
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("#yen debug :"+JSON.stringify(this.state.noteTitle));
        console.log("componentDidUpdate prevProps:"+JSON.stringify(prevProps));
        console.log("componentDidUpdate prevState:"+JSON.stringify(prevState));
    }
    


    

    isEmpty = (obj) => {
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
      
        return JSON.stringify(obj) === JSON.stringify({});
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    addData = (title,content) => {
        var item ={};
        item.noteTitle = title;
        item.noteContent = content;
        // // sent data to App.js
        // this.props.pushDataToFirebase(item);
        
        if (item.noteTitle !== '' && this.props.editItem.id === '') {
            console.log("111111111111");
            console.log(item);
            this.props.addDataToStore(item);
            this.setState({
                noteTitle: '',
                noteContent: ''
            });
            this.props.alertOn("Add new Succeed");
            
        } else if (this.props.editItem.id !== '') {
            if(item.noteTitle === '') {
                item.noteTitle = this.props.editItem.noteTitle;
                
            }
            if(item.noteContent === '') {
                item.noteContent = this.props.editItem.noteContent;
            }
            item.id=this.props.editItem.id;
            this.props.updateItemStore(item);
            this.props.alertOn("Edit Succeed");
        }

        this.props.editItemStore({
            "id":"",
            "noteTitle":"",
            "noteContent":""
        });
        
        
    }  

    render() {       
        
        // console.log(this.props.editItem);
        console.log("#yen 4"); 
        return (
            <div className="col-4">
                <form>
                    <h3>Sửa tiêu đề ghi chú</h3>
                    <div className="form-group">
                        <label  htmlFor="noteTitle">Tiêu đề ghi chú</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề ghi chú" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <h3>Sửa nội dung ghi chú</h3>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung ghi chú</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataToStore: (item) => {
            dispatch({type:"ADD_DATA",item})
        },
        editItemStore: (editItem) => {
            dispatch({type:"EDIT_DATA",editItem})
        },
        updateItemStore: (updateItem) => {
            dispatch({type:"UPDATE_DATA",updateItem})
        },
        alertOn: (alertContent) => {
            dispatch({
                type:"ALERT_ON",
                alertContent
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
