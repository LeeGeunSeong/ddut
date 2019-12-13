var ref = new Firebase("https://databaseName.firebaseio.com");

var config = {
    apiKey: "apiKey",
    authDomain: "your-firebase-project-id.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com"
  };

  firebase.initializeApp(config);

var rootRef = firebase.database().ref();