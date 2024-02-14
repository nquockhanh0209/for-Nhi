import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDFJ7ro2xakPUjPA6yY_ieW67kwaQdpURU",
//   authDomain: "valentine-for-nhi.firebaseapp.com",
//   projectId: "valentine-for-nhi",
//   storageBucket: "valentine-for-nhi.appspot.com",
//   messagingSenderId: "470466172843",
//   appId: "1:470466172843:web:501f3ff5229d6fba3264ee",
//   measurementId: "G-QQZ5LMN2TY"
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
