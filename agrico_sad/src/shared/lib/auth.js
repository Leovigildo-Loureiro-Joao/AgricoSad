const USER_TYPE_STORAGE_KEY = 'userType';
const AUTH_CHANGE_EVENT = 'agrodecide:auth-change';

export const USER_ROLES = {
  admin: 'Administrador',
  tecnico: 'Tecnico',
};

export function getUserType() {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem(USER_TYPE_STORAGE_KEY);
}

export function setStoredUserType(userType) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(USER_TYPE_STORAGE_KEY, userType);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function clearStoredUserType() {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(USER_TYPE_STORAGE_KEY);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function subscribeToUserType(callback) {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleChange = () => callback();

  window.addEventListener('storage', handleChange);
  window.addEventListener(AUTH_CHANGE_EVENT, handleChange);

  return () => {
    window.removeEventListener('storage', handleChange);
    window.removeEventListener(AUTH_CHANGE_EVENT, handleChange);
  };
}

export function getRoleLabel(userType) {
  return USER_ROLES[userType] ?? 'Utilizador';
}
