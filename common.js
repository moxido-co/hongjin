// common.js
if (!window.firebase) {
  console.error("Firebase SDK is not loaded. Make sure to include it before common.js.");
}

// Firebase client configuration (obtained from your Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyApKhkDkBJf9iG6fV3oAygXs43nYHDaWoI",
  authDomain: "hongjin-0.firebaseapp.com",
  projectId: "hongjin-0",
  storageBucket: "hongjin-0.firebasestorage.app",
  messagingSenderId: "824277571576",
  appId: "1:824277571576:web:3e6fe83d23e66f823d280d",
  measurementId: "G-Q8WCC2R9BY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Utility functions for consistent error/success handling
function showError(message) {
  alert("Error: " + message);
}

function showSuccess(message) {
  alert(message);
}
