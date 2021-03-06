// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  
    firebase: {
      apiKey: "AIzaSyBij-ysSAGVHj7cC_wXsijqLA2GzV5cSog",
      authDomain: "fire-chat-60993.firebaseapp.com",
      projectId: 'fire-chat-60993',
      storageBucket: 'fire-chat-60993.appspot.com',
      messagingSenderId: '449092780650',
      appId: '1:449092780650:web:f9465066e434f53abac013',
      measurementId: 'G-QJ7WSTPNQG'
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
