function loading_firebase() {
  var fb = document.createElement('script');
  fb.src = "https://www.gstatic.com/firebasejs/4.3.1/firebase.js";
  fb.onload = config_firebase;
  document.getElementsByTagName('head')[0].appendChild(fb);
}

function jquery_complete(){
  console.log("JQUERY LOAD");
  loading_firebase()
}

function config_firebase() {
  var config = {
    apiKey: "AIzaSyDXOvyw3fUxsu65Wi70YefPjRrMpS0aKqU",
    authDomain: "ranguinho-320bb.firebaseapp.com",
    databaseURL: "https://ranguinho-320bb.firebaseio.com/",
  };
  firebase.initializeApp(config);
}

function upload_data(data){
  firebase.database().ref().set(data);
}

function set_react(){
  window.react = $("#pane-side > div")[0];
}

function start_loop(react_instance) {
  setInterval(function() {
    react_instance._renderedChildren[0]._instance
  }, 500);
}

var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
jq.onload = jquery_complete;
document.getElementsByTagName('head')[0].appendChild(jq);