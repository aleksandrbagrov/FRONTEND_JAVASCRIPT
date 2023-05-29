import { useContext, useState } from "react"
import { Store } from "../Store";

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const { setLoginRequest } = useContext(Store);

  const doLogin = _ => {
    setLoginRequest({
      action: 'login',
      email,
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
              <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                <div class="form-text">We'll never share your personal data with anyone else.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" value={pass} onChange={e => setPass(e.target.value)} />
              </div>
              <button type="button" class="red" onClick={doLogin}>Login</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}