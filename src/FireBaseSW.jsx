import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebase);
const messaging = getMessaging(firebase);

export const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      let keypair = import.meta.env.VITE_FCM_KEY_PAIR;
      getToken(messaging, { vapidKey: keypair }).then((token) => {
        console.log(`푸시 토큰 발급 완료 : ${token}`)
      }).catch((err) => {
        console.log(err);
        console.log('푸시 토큰 가져오는 중에 에러 발생')
      })
    } else if (permission === 'denied') {
      console.log('푸시 권한 차단')
    }
  })
}

