export const isProd = !!import.meta.env.PROD;
export const isDev = !isProd;

export default {
  FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY,
  FIREBASE_PROJECT_ID: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID: import.meta.env.VITE_FIREBASE_SENDER_ID,
  FIREBASE_APP_ID: import.meta.env.VITE_FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  EMULATOR: import.meta.env.VITE_EMULATOR === 'true',
};
