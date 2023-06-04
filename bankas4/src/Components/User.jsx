import { useContext } from 'react';
import Link from './Link';
import { Store } from '../Store';

export default function User() {

  const { user, setLoginRequest } = useContext(Store);

  const logout = _ => {
    setLoginRequest({
      action: 'logout',
      id: user.id
    })
  }

  return (
    <div className="user">
      {
        user
          ? <div className='user-logged'>
            <a href="/" className="login" style={{backgroundColor: user.color}} onClick={logout}>Logout</a>
            <h5 style={{color: user.color}}>{user.username} , welcome to React Virtual Internet Bank!</h5>
          </div>
          : <div className='user-not-logged'>
            <Link className="login" to="login">Login</Link>
          </div>
      }
    </div>
  )
}