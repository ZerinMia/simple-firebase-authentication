/* 
#steps to use firebase
1.Create a project on console.firebase.goggle.com 
2.install firebase (npm install firebase)
3.Register web app in firebase
4.copy firebase init with config forom firebase project settings into a file firebase.init.js.
5.export defult app
6.import getAuth from firebase/auth and create const auth = getAuth(app) in app.js
7.import app firebase init.js into your app.js
8.turn on google authentication methode (firebase>autehntication>enable google sign in).
9.create google provider
10.sing in with popup and pass auth and porvider
11.handle .then (if successful) and catch erro (if error)

*/