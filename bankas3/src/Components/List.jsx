import { useContext, useState } from 'react';
import Stat from './Stat';
import Modal from '../Components/Modal/Modal';
import ModalVrongEnter from '../Components/Modal/ModalVrongEnter';
import ModalDelete from '../Components/Modal/ModalDelete';
import ModalAdd from '../Components/Modal/ModalAdd';
import ModalDeduct from '../Components/Modal/ModalDeduct';
import ModalNotD from '../Components/Modal/ModalNotD';
import ModalNotDeduct from '../Components/Modal/ModalNotDeduct';
import AccountsFilter from './AccountsFilter';
import { Store } from '../Store';
import Client from './Client';

function List() {

    // const [modalActive, setModalActive] = useState(false);
    const [modalEnterActive, setModalEnterActive] = useState(false);
    const [modalDeleteActive, setModalDeleteActive] = useState(false);
    const [modalClient, setModalClient] = useState(null);
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalDeductActive, setModalDeductActive] = useState(false);
    const [modalNotDeductActive, setModalNotDeductActive] = useState(false);
    const [modalNotDeleteActive, setModalNotDeleteActive] = useState(false);
    const [transaction, setTransaction] = useState(0);

    const {clients, setClient, radio, setModalActive } = useContext(Store);


    return (
        <div className="App">
            <header className="App-header">
                <Stat />
                <AccountsFilter />
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
                        clients?.map(client => <Client key={client.id} client={client} setClient={setClient} radio={radio} setModalEnterActive={setModalEnterActive} setModalDeleteActive={setModalDeleteActive} setModalClient={setModalClient} setModalAddActive={setModalAddActive} setModalNotDeleteActive={setModalNotDeleteActive} setModalDeductActive={setModalDeductActive} setModalNotDeductActive={setModalNotDeductActive} setTransaction={setTransaction} />)
                    }
                </div>
                <button className="pink" onClick={() => setModalActive(true)}>Add new client</button>

                <Modal />
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

export default List;