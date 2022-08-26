    // Import the functions you need from the SDKs you need
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDI5k7JArnIVJOi1n_6u06yKEZ5onEU0go",
    authDomain: "projeto-mundo-invertido-42776.firebaseapp.com",
    projectId: "projeto-mundo-invertido-42776",
    storageBucket: "projeto-mundo-invertido-42776.appspot.com",
    messagingSenderId: "400579607426",
    appId: "1:400579607426:web:e8d26477805722179ded9b"
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    export default app