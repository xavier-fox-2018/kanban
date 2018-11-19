import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyAo6DKDMw8BKLMCShFIGcuSeAo7qCRHlG8",
  authDomain: "bankan-2277b.firebaseapp.com",
  databaseURL: "https://bankan-2277b.firebaseio.com",
  projectId: "bankan-2277b",
  storageBucket: "bankan-2277b.appspot.com",
  messagingSenderId: "345615480108"
});

export const db = app.database();
export const allItems = db.ref("allItems/-LRYNqJQ2rCFMezG39fC/");
export const allItems1 = db.ref("allItems")