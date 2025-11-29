"use client";

import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD44OSXP1O532zJh4odPyU8Q1K8Edpuops",
  authDomain: "olympiad-64d3e.firebaseapp.com",
  projectId: "olympiad-64d3e",
  storageBucket: "olympiad-64d3e.firebasestorage.app",
  messagingSenderId: "136335560608",
  appId: "1:136335560608:web:d06137f59e6e113d1cdec5",
  measurementId: "G-JK4J4GCP9H",
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;
let auth: Auth | undefined;

if (typeof window !== "undefined") {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  db = getFirestore(app);
  auth = getAuth(app);
}

export { db, auth };

export async function getAnalyticsClient() {
  if (typeof window === "undefined" || !app) return null;
  const { getAnalytics } = await import("firebase/analytics");
  return getAnalytics(app);
}
