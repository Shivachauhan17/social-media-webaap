import React from 'react';
import { useCookies } from 'react-cookie';

const CookieService = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['publicUser']);

  const setpublicUserCookie = (value, options = {}) => {
    setCookie('publicUser', value, options);
  };

  const getpublicUserCookie = () => {
    return cookies.publicUser || null;
  };

  const removeSid=()=>{
    removeCookie('connect.sid');
  }

  const removepublicUserCookie = () => {
    removeCookie('publicUser');
  };

  return {
    setpublicUserCookie,
    getpublicUserCookie,
    removepublicUserCookie,
    removeSid,
  };
};

export default CookieService;