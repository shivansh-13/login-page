var firebaseConfig = {
    apiKey: "AIzaSyBuVf9xXk1aikk8NgAikp52fA85v5Ysz1M",
    authDomain: "login-verification---personal.firebaseapp.com",
    projectId: "login-verification---personal",
    storageBucket: "login-verification---personal.appspot.com",
    messagingSenderId: "603045268518",
    appId: "1:603045268518:web:f8fefec1ab946413caeae7",
    measurementId: "G-8ZX837XEY0"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;

$("#btnsignin").click(function () {

    var email = $("#email").val();
    var password = $("#password").val();

    console.log(password);
    if (email != "" && password != "") {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    } else {


    window.alert("Please fill out all fields correctly.");


}
});
