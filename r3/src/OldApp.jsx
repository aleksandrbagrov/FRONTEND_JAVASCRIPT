// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}



function App() {

  const [animal, setAnimal] = useState('');

useEffect(() => {
  axios.get('http://localhost:3003/animal/Vilkai')
  .then(res => {
    console.log(res);

    setAnimal(res.data.text);
  })
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SERVER</h1>
        <h1>Hello, {animal}!</h1>
      </header>
    </div>
  );
}

export default App;
