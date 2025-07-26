// Replace this with YOUR Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyD4Ri4TyfVH-Jn7qbTJg-cGzVi_r_H-w5c",
  authDomain: "foodmitra-2722.firebaseapp.com",
  projectId: "foodmitra-2722",
  storageBucket: "foodmitra-2722.firebasestorage.app",
  messagingSenderId: "794643777003",
  appId: "1:794643777003:web:691c23e35e1e05279f85ae"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
