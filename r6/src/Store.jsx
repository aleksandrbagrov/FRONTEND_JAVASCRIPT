import { createContext } from 'react';



export const Store = createContext();

export const Data = ({children}) => {

  return (
    <Store.Provider value={{}}>
      {children}
    </Store.Provider>
  )

}