import { useState } from 'react';
import './App.scss';
import Square from './Components/008/Square';
// import Create from './Components/008/Create';
import { v4 as uuidv4 } from 'uuid';


function App() {

    const [sq, setSquare] = useState([]);

    const addSquare = () => {
        setSquare(s => [...s, { id:uuidv4(), counter: 0 }])
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Kvadratai</h1>
                <div className="squares">
                    {
                        sq.map(s => <Square key={s.id} data={s} setSquare={setSquare} />)
                    }
                </div>
                    <button className='green' onClick={addSquare}>prideti</button>
            </header>
        </div>
    );

}

export default App;