import React from 'react';
import cookieCutter from 'cookie-cutter';

//GET COOKIES
export function getCookieObj(cookieName) {
  let cookie = cookieCutter.get(cookieName);
  if (typeof cookie === 'object') {
    if (!isEmptyObj(cookie)) {
      let cookObj = JSON.parse(cookie);
      return cookObj;
    } else {
      return false;
    }
  } else {
    return cookie;
  }
}

//SET COOKIES
export function setCookieObj(value, cookieName) {
  if (typeof value == 'string') {
    cookieCutter.set(cookieName, value);
  } else {
    cookieCutter.set(cookieName, JSON.stringify(value));
  }
}

//DELETE COOKIE
export async function delCookie(cookieName) {
  cookieCutter.set(cookieName, '', { expires: new Date(0) });
  return;
}

//CHECK FOR EMPTY OBJ
export function isEmptyObj(obj) {
  if (obj) return Object.keys(obj).length === 0;
}

//SHOW ELEMENT
export function showSection(sectionId) {
  //REMOVE HIDDEN CLASSES
  let updateHideClass = document.getElementById(sectionId);
  updateHideClass?.classList.remove('hidden');
  updateHideClass?.classList.add('block');
}

export function hideSection(sectionId) {
  //ADD HIDDEN CLASSES
  let updateHideClass = document.getElementById(sectionId);
  updateHideClass?.classList.remove('block');
  updateHideClass?.classList.add('hidden');
}

export function isDateInPast(dateString) {
  const currentDate = new Date();
  const dateToCheck = new Date(dateString);
  return dateToCheck < currentDate;
}
