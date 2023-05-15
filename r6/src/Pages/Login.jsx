import { useState } from "react"

export default function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  return (

    <div className="container">
      <div className="row">
        <div className="col-3">
          <h1>Login</h1>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">
              App Login
            </div>
            <div className="card-body">
              <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                  <div class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control" value={pass} onChange={e => setPass(e.target.value)} />
              </div>
              <button type="button" class="red">Login</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}