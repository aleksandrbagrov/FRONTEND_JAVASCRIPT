import { useContext, useState } from "react"
import { Store } from "../Store";

export default function Login() {

  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const { setLoginRequest } = useContext(Store);

  const doLogin = _ => {
    setLoginRequest({
      action: 'login',
      username,
      pass
    });

  }


  return (

    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="card-header" style={{backgroundColor: "#61dafb"}}>
              To login please enter your Username and Password
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                <div className="form-text">We'll never share your personal data with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} />
              </div>
              <button type="button" className="red" onClick={doLogin}>Login</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}