import React, { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import fBase from 'fBase';
import { authService } from 'fBase';

function App() {
   const [init, setInit] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [userObj, setUserObj] = useState(null);
   useEffect(() => {
      authService.onAuthStateChanged((user) => {
         if (user) {
            setIsLoggedIn(true);
            setUserObj(user);
         } else {
            setIsLoggedIn(false);
         }
         setInit(true);
      });
   }, []);
   return (
      <>
         {init ? (
            <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
         ) : (
            'Initializing...'
         )}
         <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
      </>
   );
}

export default App;
