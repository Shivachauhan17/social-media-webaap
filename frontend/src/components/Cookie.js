import React from 'react';
import { useCookies } from 'react-cookie';

const CookieService = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const setUserCookie = (value, options = {}) => {
    setCookie('user', value, options);
  };

  const getUserCookie = () => {
    return cookies.user || null;
  };

  const removeUserCookie = () => {
    removeCookie('user');
  };

  return {
    setUserCookie,
    getUserCookie,
    removeUserCookie,
  };
};

export default CookieService