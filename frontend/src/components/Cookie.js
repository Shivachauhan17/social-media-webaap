import React from 'react';
import { useCookies } from 'react-cookie';

const CookieService = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['id']);

  const setIdCookie = (value, options = {}) => {
    setCookie('id', value, options);
  };

  const getIdCookie = () => {
    return cookies.id || null;
  };

  const removeIdCookie = () => {
    removeCookie('id');
  };

  return {
    setIdCookie,
    getIdCookie,
    removeIdCookie,
  };
};

export default CookieService