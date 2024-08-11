import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword,

 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";


  const firebaseConfig = {
    Past API
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log(app);
  console.log(auth);


  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      console.log("hello");
      const uid = user.uid;
      
    } else {
      
      console.log("log");
  }
});

var password = document.getElementById("password");
var email = document.getElementById("email");
var submit = document.getElementById("submit");

submit.addEventListener("click", creatUser);


function creatUser(){
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    console.log("hp gya");
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}