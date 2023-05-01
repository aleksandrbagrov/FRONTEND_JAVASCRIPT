
import './Components/Bankas1/App.scss';
import { v4 as uuidv4 } from 'uuid';
import Square from './Components/Bankas1/Square';
import { useEffect, useState } from 'react';
import Stat from './Components/Bankas1/Stat';
import Modal from './Components/Bankas1/Modal/Modal';
import ModalVrongEnter from './Components/Bankas1/Modal/ModalVrongEnter';
import ModalDelete from './Components/Bankas1/Modal/ModalDelete';
import ModalAdd from './Components/Bankas1/Modal/ModalAdd';
import ModalDeduct from './Components/Bankas1/Modal/ModalDeduct';
import ModalNotD from './Components/Bankas1/Modal/ModalNotD';
import ModalNotDeduct from './Components/Bankas1/Modal/ModalNotDeduct';



function App() {

    const [modalActive, setModalActive] = useState(false);
    const [modalEnterActive, setModalEnterActive] = useState(false);
    const [modalDeleteActive, setModalDeleteActive] = useState(false);
    const [modalClient, setModalClient] = useState(null);
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalDeductActive, setModalDeductActive] = useState(false);
    const [modalNotDeductActive, setModalNotDeductActive] = useState(false);
    const [modalNotDeleteActive, setModalNotDeleteActive] = useState(false);
    const [transaction, setTransaction] = useState(0);

    const [clients, setClient] = useState(null);

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');


    const doName = e => {
        setName(e.target.value);
    }

    const doLname = e => {
        setLname(e.target.value);
    }

    const addClient = _ => {
        setClient(s => [...s, {
            id: uuidv4(),
            name: name,
            lname: lname,
            balance: 0,
        }]);
    }



    useEffect(() => {
        if (null !== localStorage.getItem('clients')) {
            const clientsData = JSON.parse(localStorage.getItem('clients'));
            clientsData.sort((a, b) => {
                const nameA = a.lname.toUpperCase();
                const nameB = b.lname.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setClient(clientsData);
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


    return (
        <div className="App">
            <header className="App-header">
                <div className='ribbon'>
                    <div className='logo'>
                        <h2>VIB</h2>
                    </div>
                    <p>Virtual Internet Bank</p>
                </div>
                <Stat clients={clients} />
                <div className='clients-header'>
                    <div className='name'>Name</div>
                    <div className='lname'>Family Name</div>
                    <div className='balance'>Account Balance, €</div>
                    <div className='operational-ammount'>Transuction ammount</div>
                    <div className='operation'>Transaction</div>
                    <div></div>

                </div>

                <div className='clients'>

                    <div className='client'>

                    </div>
                    {
                        clients?.map(client => <Square key={client.id} client={client} setClient={setClient} setModalEnterActive={setModalEnterActive} setModalDeleteActive={setModalDeleteActive} setModalClient={setModalClient} setModalAddActive={setModalAddActive} setModalNotDeleteActive={setModalNotDeleteActive} setModalDeductActive={setModalDeductActive} setModalNotDeductActive={setModalNotDeductActive} setTransaction={setTransaction} />)
                    }
                </div>
                <button className="green" onClick={() => setModalActive(true)}>Add new client</button>


                {
                    console.log('modal active', modalActive)
                }
                <Modal active={modalActive} setActive={setModalActive}>
                    <>
                        <h3 style={{ backgroundColor: 'gray' }}>Opening a new account</h3>
                        <h4>Please enter new customer details</h4>
                        <form>
                            <div className='operational-ammount'>
                                <label className="form-label" style={{ margin: "0 15px" }}>First Name</label>
                                <input type="text" value={name} onChange={doName} />
                            </div>
                            <div className='operational-ammount'>
                                <label className="form-label" style={{ margin: "0 15px" }}>Family Name</label>
                                <input type="text" value={lname} onChange={doLname} />
                            </div>
                            <div className='modal-buttons'>
                                <button className="green" onClick={addClient} >Add New Client</button>
                                <button className="yellow" onClick={() => setModalActive(false)}>Cancel</button>
                            </div>
                        </form>
                    </>
                </Modal>
                <ModalAdd active={modalAddActive} setActive={setModalAddActive} modalClient={modalClient} transaction={transaction} />
                <ModalDeduct active={modalDeductActive} setActive={setModalDeductActive} modalClient={modalClient} transaction={transaction} />
                <ModalNotDeduct active={modalNotDeductActive} setActive={setModalNotDeductActive} />
                <ModalDelete active={modalDeleteActive} setActive={setModalDeleteActive} modalClient={modalClient} setClient={setClient} />
                <ModalVrongEnter modalEnterActive={modalEnterActive} setModalEnterActive={setModalEnterActive} />
                <ModalNotD modalNotDeleteActive={modalNotDeleteActive} setModalNotDeleteActive={setModalNotDeleteActive} />
            </header>
        </div >
    );

}

export default App;