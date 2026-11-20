"use client";

// Inicialización perezosa de Firebase: solo se carga cuando un formulario o
// Remote Config lo necesitan, así la página inicial no paga el peso del SDK.
import type { FirebaseApp } from "firebase/app";
import { firebaseConfig, firebaseEnabled, recaptchaKey } from "./config";

let appPromise: Promise<FirebaseApp | null> | null = null;

export function getFirebaseApp(): Promise<FirebaseApp | null> {
  if (!firebaseEnabled || typeof window === "undefined") return Promise.resolve(null);
  if (!appPromise) {
    appPromise = (async () => {
      const { initializeApp, getApps } = await import("firebase/app");
      const app = getApps()[0] ?? initializeApp(firebaseConfig);
      if (recaptchaKey) {
        const { initializeAppCheck, ReCaptchaV3Provider } = await import("firebase/app-check");
        initializeAppCheck(app, {
          provider: new ReCaptchaV3Provider(recaptchaKey),
          isTokenAutoRefreshEnabled: true,
        });
      }
      return app;
    })();
  }
  return appPromise;
}

/** Crea un documento en una colección con `creado` = hora del servidor. */
export async function crearDocumento(coleccion: string, data: Record<string, unknown>) {
  const app = await getFirebaseApp();
  if (!app) {
    // Sin Firebase configurado (desarrollo local): se simula el envío.
    console.info(`[dev] ${coleccion}`, data);
    return;
  }
  const { getFirestore, collection, addDoc, serverTimestamp } = await import("firebase/firestore");
  await addDoc(collection(getFirestore(app), coleccion), { ...data, creado: serverTimestamp() });
}
