import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    
    removeItemFirebase = (id) => {
        // console.log(id);
        
        this.props.removeItemStore(id);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <div className="row">
                        <div className="col">
                            <h5 className="mb-0">
                                <a data-toggle="collapse" data-parent="#noteList" href={"#noteContent" +this.props.index} aria-expanded="true" aria-controls="noteContent1">
                                    {this.props.noteTitle}
                                </a>
                            </h5>
                        </div>
                        <div className="col-2">
                            <div className="btn-group">
                                <div onClick={() => this.props.editItemStore(this.props.item)} className="btn btn-warning sua"><i className="fa fa-edit" >Sửa</i></div>
                                <div onClick={() => this.removeItemFirebase(this.props.id)} className="btn btn-danger sua"><i className="fa fa-edit" >Xóa</i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={"noteContent"+this.props.index} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeItemStore: (getId) => {
            dispatch({type:"REMOVE_DATA",getId})
        },
        editItemStore: (editItem) => {
            dispatch({type:"EDIT_DATA",editItem})
        }
    }
}

export default connect(null,mapDispatchToProps)(NoteItem);