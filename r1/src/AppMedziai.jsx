import { useState } from 'react';
import './Components/009/GreenSquare.scss';
import Square from './Components/009/Square';
import { v4 as uuidv4 } from 'uuid';


function App() {

    const [azuolas, setAzuolas] = useState([]);
    const [berzas, setBerzas] = useState([]);
    const [uosis, setUosis] = useState([]);

    const addSquare = (func) => {
        func(s => [...s, uuidv4()])
    }

    const kill = _ => {
        setAzuolas([]);
        setBerzas([]);
        setUosis([]);
    }


    return (
        <div className="App">
            <header className="App-header">
                <>
                <h1>MEDŽIAI</h1>
                    <div className='green-rectangle'>
                        <div className='column'>
                            {
                                azuolas?.map(s => <Square key={s} square={'azuolas'} />)
                            }
                        </div>
                        <div className='column'>
                            {
                                berzas?.map(s => <Square key={s} square={'berzas'} />)
                            }
                        </div>
                        <div className='column'>
                            {
                                uosis?.map(s => <Square key={s} square={'uosis'} />)
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <button className="green" onClick={() => addSquare(setAzuolas)}>Ažuuolas</button>
                        <button className="yellow" onClick={() => addSquare(setBerzas)}>Beržas</button>
                        <button className="pink" onClick={() => addSquare(setUosis)}>Uosis</button>
                    </div>
                    <button className="red" onClick={kill}>Ištrinti</button>
                </>
            </header>
        </div>
    );

}

export default App;