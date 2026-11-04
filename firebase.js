// Import ang Firebase app, authentication, at Realtime Database gamit ang Modular SDK v10.12.0
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Ang iyong configuration mula sa Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBSPxQdGkLfRkr63un2RRxOi6Ox2D5pYuw",
  authDomain: "buhibaka-f88ca.firebaseapp.com",
  databaseURL: "https://buhibaka-f88ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buhibaka-f88ca",
  storageBucket: "buhibaka-f88ca.firebasestorage.app",
  messagingSenderId: "101495995328",
  appId: "1:101495995328:web:d3feb451f7fba4e2732625",
  measurementId: "G-T7M5T7X33W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db, ref, set, onValue };