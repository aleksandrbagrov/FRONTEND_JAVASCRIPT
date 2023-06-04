import { useContext, useState } from 'react';
import Stat from './Stat1';
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
import ModalBlock from './Modal/ModalBlock';
import ModalEdit from './Modal/ModalEdit';
import ModalMessages from './Modal/ModalMessages';

function List() {

    const [modalEnterActive, setModalEnterActive] = useState(false);
    const [modalDeleteActive, setModalDeleteActive] = useState(false);
    const [modalClient, setModalClient] = useState(null);
    const [modalAddActive, setModalAddActive] = useState(false);
    const [modalDeductActive, setModalDeductActive] = useState(false);
    const [modalNotDeductActive, setModalNotDeductActive] = useState(false);
    const [modalNotDeleteActive, setModalNotDeleteActive] = useState(false);
    const [transaction, setTransaction] = useState(0);
    const [modalBlockActive, setModalBlockActive] = useState(false);
    const [modalEditActive, setModalEditActive] = useState(false);
    const [message, setMessage] = useState('');
    const [modalMessageActive, setModalMessageActive] = useState(false);

    const { clients, setClient, radio, setModalActive } = useContext(Store);


    return (
        <div className="App">
            <header className="App-header">
                <Stat />
                <AccountsFilter />
                <div className='clients-header'>
                    <div className='photo'>Photo</div>
                    <div className='name'>Name</div>
                    <div className='lname'>Family Name</div>
                    <div className='balance'>Account Balance, €</div>
                    <div className='operational-ammount'>Transuction ammount</div>
                    <div className='operation'>Transaction</div>
                    <div className='management'> Accounts management</div>

                </div>
                <div className='clients'>
                    {
                        clients?.map(client => <Client key={client.id} setMessage={setMessage} client={client} setClient={setClient} radio={radio} setModalEnterActive={setModalEnterActive} setModalDeleteActive={setModalDeleteActive} modalClient={modalClient} setModalClient={setModalClient} setModalAddActive={setModalAddActive} setModalNotDeleteActive={setModalNotDeleteActive} setModalDeductActive={setModalDeductActive} setModalNotDeductActive={setModalNotDeductActive} setTransaction={setTransaction} setModalBlockActive={setModalBlockActive} setModalEditActive={setModalEditActive} setModalMessageActive={setModalMessageActive}/>)
                    }
                </div>
                <button className="green" onClick={() => setModalActive(true)}>Add new client</button>

                <Modal />
                <ModalMessages active={modalMessageActive} setActive={setModalMessageActive} >
                    {message}
                </ModalMessages>
                <ModalAdd active={modalAddActive} setActive={setModalAddActive} modalClient={modalClient} transaction={transaction} />
                <ModalDeduct active={modalDeductActive} setActive={setModalDeductActive} modalClient={modalClient} transaction={transaction} />
                <ModalNotDeduct active={modalNotDeductActive} setActive={setModalNotDeductActive} />
                <ModalDelete active={modalDeleteActive} setActive={setModalDeleteActive} modalClient={modalClient} setModalClient={setModalClient} />
                <ModalVrongEnter modalEnterActive={modalEnterActive} setModalEnterActive={setModalEnterActive} />
                <ModalNotD modalNotDeleteActive={modalNotDeleteActive} setModalNotDeleteActive={setModalNotDeleteActive} />
                <ModalBlock active={modalBlockActive} setActive={setModalBlockActive} modalClient={modalClient} />
                <ModalEdit active={modalEditActive} setActive={setModalEditActive} modalClient={modalClient} setModalClient={setModalClient} />
            </header>
        </div >
    );

}

export default List;