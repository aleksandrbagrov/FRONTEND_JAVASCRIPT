import { useEffect, useState } from 'react';

export default function useUser() {

  const [user, setUser] = useState(null);

  useEffect(() => {
      const lsUser = localStorage.getItem('bankas4');
      if(null === lsUser) {
        return null;
      }
      setUser(JSON.parse(lsUser));
  }, [setUser]);

  const _validateUser = data => {
    return {
      color: data.color || '',
      username: data.username || '',
      role: data.role || '',
      id: data.id || ''
    }
  }

  const _setUser = data => {
    if (data === null) {
      setUser(null);
      localStorage.removeItem('bankas4');
    } else {
      setUser(_validateUser(data));
      localStorage.setItem('bankas4', JSON.stringify(_validateUser(data)));
    }
  }

  return [user, _setUser]

}