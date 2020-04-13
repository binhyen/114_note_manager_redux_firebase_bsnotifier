import * as firebase from 'firebase'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgwnAfv9crBcm-E6aBTmnusVMAWc4WChs",
    authDomain: "notereact-d9844.firebaseapp.com",
    databaseURL: "https://notereact-d9844.firebaseio.com",
    projectId: "notereact-d9844",
    storageBucket: "notereact-d9844.appspot.com",
    messagingSenderId: "1039573259956",
    appId: "1:1039573259956:web:5d3d459a262c101ccc29e1",
    measurementId: "G-GH6RE7032H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const  noteConnect = firebase.database().ref('dataJson') ;