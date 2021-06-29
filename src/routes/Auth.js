import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTwitter,
   faGoogle,
   faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { authService, firebaseInstance } from 'fBase';
import AuthForm from 'components/AuthForm';

const Auth = () => {
   const onSocialClick = async (event) => {
      const {
         target: { name },
      } = event;
      let provider;
      if (name === 'google') {
         provider = new firebaseInstance.auth.GoogleAuthProvider();
      } else if (name === 'github') {
         provider = new firebaseInstance.auth.GithubAuthProvider();
      }
      const data = await authService.signInWithPopup(provider);
      console.log(data);
   };

   return (
      <div className="authContainer">
         <FontAwesomeIcon
            icon={faTwitter}
            color={'#04AAFF'}
            size="3x"
            style={{ marginBottom: 30 }}
         />
         <AuthForm />
         <div className="authBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">
               <FontAwesomeIcon icon={faGoogle} style={{ marginRight: 3 }} />
               Continue with Google
            </button>
            <button onClick={onSocialClick} name="github" className="authBtn">
               <FontAwesomeIcon icon={faGithub} style={{ marginRight: 3 }} />
               Continue with Github
            </button>
         </div>
      </div>
   );
};

export default Auth;
