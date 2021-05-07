import React from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleProvider } from '../../../firebase/Firebase';
import socialMediaAuth from '../../../firebase/service/Auth';
import GoogleIcon from '../../../assets/img/google.svg';
import UserService from '../../../Services/UserService';

export default function GoogleBtn() {
  const history = useHistory();

  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log('google result', res);
    const nameFromEmail = res.email.includes('@')
      ? res.email.split('@')[0]
      : res.email;
    UserService.createUserInDatabase(res.uid, nameFromEmail)
      .then(() => {
        history.push('/');
      })
      .catch((e) => console.error('catch error', e));
  };

  return (
    <>
      <button
        onClick={() => handleClick(GoogleProvider)}
        type="button"
        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs relative"
        style={{ transition: 'all .15s ease' }}
      >
        {' '}
        <img alt="..." className="w-5 mr-1" src={GoogleIcon} />
        Google
      </button>
    </>
  );
}
