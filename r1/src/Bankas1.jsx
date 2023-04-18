
import './Components/Bankas1/App.scss';

import { v4 as uuidv4 } from 'uuid';
import Square from './Components/Bankas1/Square';
import { useEffect, useState } from 'react';
// import Create from './Components/Bankas1/Create';
import Stat from './Components/Bankas1/Stat';



function App() {

    const [clients, setClient] = useState(null);

    const addClient = _ => {
        setClient(s => [...s, {
            id: uuidv4(),
            name: 'Jonas',
            lname: 'Jonaitis',
            balance: 120.05,
        }])
    }


    useEffect(() => {
        if (null !== localStorage.getItem('clients')) {
            setClient(JSON.parse(localStorage.getItem('clients')))
        } else {
            setClient([]);
        }

    }, []);


    useEffect(() => {
        if (null === clients) {
            return;
        }
        localStorage.setItem('clients', JSON.stringify(clients));
    }, [clients]);

    const filter0 = _ => {

    }

    const filterNon0 = _ => {
        
    }

    const showAll = _ => {
        
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Bankas 1</h1>

                <div className='clients'>
                    <div className='client'>
                        <div className='name'>Name</div>
                        <div className='lname'>Family Name</div>
                        <div className='balance'>Account Balance, E</div>
                        <div className='operational-ammount'>Operation sum</div>
                        <div className='operation'>Operation</div>
                        <div></div>
                    </div>
                    {
                        clients?.map(client => <Square key={client.id} client={client} setClient={setClient} />)
                    }
                </div>
                <button className="green" onClick={addClient}>Add new client</button>
                <button className="red" onClick={filter0}>Filter 0 balance</button>
                <button className="blue" onClick={filterNon0}>Filter non 0 balance</button>
                <button className="pink" onClick={showAll}>Show all</button>
                {/* <Create clients={clients} setSquare={setClient} /> */}
                <Stat clients={clients} />
            </header>
        </div >
    );

}

export default App;