// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'donia-db',
    appId: '1:889999620051:web:743c96e9dce328daa2a126',
    databaseURL: 'https://donia-db-default-rtdb.firebaseio.com',
    storageBucket: 'donia-db.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyB8x_fD6eWFaH5iGEjhsJ5OON2keEMvj64',
    authDomain: 'donia-db.firebaseapp.com',
    messagingSenderId: '889999620051',
  },
  production: false,
  baseUrl: 'https://donia-db-default-rtdb.firebaseio.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
