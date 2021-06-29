import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ userObj }) => (
   <nav>
      <ul>
         <li>
            <Link
               to="/"
               style={{ display: 'flex', marginTop: 25, marginLeft: 25 }}
            >
               <FontAwesomeIcon icon={faTwitter} color={'#04AAFF'} size="2x" />
            </Link>
         </li>
         <li>
            <Link
               to="/profile"
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  fontSize: 12,
                  marginTop: 50,
               }}
            >
               <FontAwesomeIcon icon={faUser} color={'#04AAFF'} size="3x" />
               <span
                  style={{
                     marginTop: 10,
                  }}
               >
                  {userObj.displayName
                     ? `${userObj.displayName}'s Profile`
                     : 'Profile'}
               </span>
            </Link>
         </li>
      </ul>
   </nav>
);
export default Navigation;
