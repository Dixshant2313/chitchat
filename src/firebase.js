import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOGHq7rSpSF0mO0TIeS5otP-b4-iuUsSQ",
  authDomain: "chit-chat-beaf1.firebaseapp.com",
  projectId: "chit-chat-beaf1",
  storageBucket: "chit-chat-beaf1.appspot.com",
  messagingSenderId: "1007303712966",
  appId: "1:1007303712966:web:3f32250969de5cc56237c7"
};

export const app = initializeApp(firebaseConfig);