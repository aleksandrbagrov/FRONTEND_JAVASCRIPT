import { createContext, useEffect } from 'react';
import useRoute from './Hooks/useRoute';
import usePageLogin from './Hooks/usePageLogin';
import useUser from './Hooks/useUser';
import useClients from './Hooks/useClients';
import { useState } from 'react';
import useFile from './Hooks/useFile';
import useStat from './Hooks/useStat';


export const Store = createContext();

export const Data = ({children}) => {

  const [displayPage, goToPage, pageSlug] = useRoute();
  const [loginResponse, setLoginRequest] = usePageLogin();
  const [user, setUser] = useUser();
  const [clients, setClient, radio, setRadio, lastUpdate, setLastUpdate] = useClients();
  const [modalActive, setModalActive] = useState(false);
  const [file, readFile, removeFile, setFile] = useFile();
  const [stat, setLastUpdateStat] = useStat();

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
      radio, setRadio,
      lastUpdate, setLastUpdate,
      file, readFile, removeFile, setFile,
      stat, setLastUpdateStat
    }}>
      {children}
    </Store.Provider>
  )

}