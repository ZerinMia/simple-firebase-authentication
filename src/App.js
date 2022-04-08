import './App.css';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState([])
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGooleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user)
      })
      .catch(error => {
        console.error('error:', error)
      })
  }

  const handleGooleSingOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({})
      })
  }

  const handleGithubSingIn = () => {
    signInWithPopup(auth, gitProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="App">

      {
        user.uid ? <button onClick={handleGooleSingOut}>Google Sing out</button> :
          <div>
            <button onClick={handleGooleSingIn}>Google Sign in</button>
            <button onClick={handleGithubSingIn}>Github Sign in</button>
          </div>

      }

      <h2>Name: {user.displayName}</h2>
      <p>I konw your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
