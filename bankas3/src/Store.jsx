import { createContext, useEffect } from 'react';
import useRoute from './Hooks/useRoute';
import usePageLogin from './Hooks/usePageLogin';
import useUser from './Hooks/useUser';
import useClients from './Hooks/useClients';
import { useState } from 'react';


export const Store = createContext();

export const Data = ({children}) => {

  const [displayPage, goToPage, pageSlug] = useRoute();
  const [loginResponse, setLoginRequest] = usePageLogin();
  const [user, setUser] = useUser();
  const [clients, setClient] = useClients();
  const [modalActive, setModalActive] = useState(false);
  const [radio, setRadio] = useState('A');

  useEffect(() => {
    if(loginResponse === null) {
      return;
    }

    if(loginResponse?.status === 'login-ok') {
      setUser(loginResponse.user);
      goToPage('home');
    } else {
      goToPage('error');
    }

    if(loginResponse?.status === 'logout-ok') {
      setUser(null);
      goToPage('home');
    }

  }, [loginResponse])

  return (
    <Store.Provider value={{
      displayPage, goToPage, pageSlug,
      loginResponse, setLoginRequest,
      user,
      clients, setClient,
      modalActive, setModalActive,
      radio, setRadio
    }}>
      {children}
    </Store.Provider>
  )

}