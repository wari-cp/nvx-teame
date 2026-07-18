import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBQl35dej2wrTxct02i27xf4vekzXMExw8",
  authDomain: "nvx-team.firebaseapp.com",
  projectId: "nvx-team",
  storageBucket: "nvx-team.firebasestorage.app",
  messagingSenderId: "471144466289",
  appId: "1:471144466289:web:ae919909ac18fb56dcd8d0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GithubAuthProvider();
document.getElementById("githubLogin").addEventListener("click", async () => {

try{

const result = await signInWithPopup(auth, provider);

alert("Welcome " + result.user.displayName);

}catch(err){

alert(err.message);

}

});
