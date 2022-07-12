import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtPI68TzjqHoc3xGkDD169bwyqxbw001U",
  authDomain: "my-diary-74dc9.firebaseapp.com",
  projectId: "my-diary-74dc9",
  storageBucket: "my-diary-74dc9.appspot.com",
  messagingSenderId: "30000720320",
  appId: "1:30000720320:web:d5715cbdd5bdbd094b8025",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 파이어베이스 초기화
const appFireStore = getFirestore(app);
// 인증 초기화
const appAuth = getAuth();

export { appFireStore, appAuth };
