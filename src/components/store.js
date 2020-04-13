import {noteConnect} from './firebaseConnect'

var redux = require('redux');

const noteInitialState = {
    editItem:{
        "id":"",
        "noteTitle":"",
        "noteContent":""
    },
    alertShow:false,
    alertContent:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteConnect.push(action.item);
            return state
        case "EDIT_DATA":
            return {...state,editItem:action.editItem}
        case "UPDATE_DATA":
            noteConnect.child(action.updateItem.id).update({
                noteTitle:action.updateItem.noteTitle,
                noteContent:action.updateItem.noteContent
            });
            return state
        case "REMOVE_DATA":
            noteConnect.child(action.getId).remove();
            return state
        case "ALERT_ON":
            return {...state,alertShow:true,alertContent:action.alertContent}
        case "ALERT_OFF":
            return {...state,alertShow:false}
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
    
})

export default store;