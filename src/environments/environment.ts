// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: "AIzaSyBf2l5eotzkOAKLAKntWkb5TamLweXhKQQ",
    authDomain: "taskcounter-a703a.firebaseapp.com",
    databaseURL: "https://taskcounter-a703a.firebaseio.com",
    projectId: "taskcounter-a703a",
    storageBucket: "taskcounter-a703a.appspot.com",
    messagingSenderId: "314613422099"
  }
};
