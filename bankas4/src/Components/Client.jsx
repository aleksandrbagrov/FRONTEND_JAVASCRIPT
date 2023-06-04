import { useContext, useState } from 'react';
import axios from 'axios';
import { Store } from '../Store';
import noimage from '../images/no-photo.png';
// import ModalDelete from './Modal/ModalDelete';


export default function Client({ setMessage, client, setModalEnterActive, setModalDeleteActive, setModalClient, setModalAddActive, setModalNotDeleteActive, setModalDeductActive, setModalNotDeductActive, setTransaction, setModalBlockActive, setModalEditActive, setModalMessageActive }) {

    const [text1, setText1] = useState('0.00');

    const { setLastUpdate } = useContext(Store);


    const handleChange1 = e => {
        if (typeof (Number(e.target.value)) === 'number')
            setText1(e.target.value)
    }


    const addSum = id => {
        if (client.status === 2) {
            setMessage(<span>You can't do any operations with blocked account!</span>);
            setModalMessageActive(true);
            setText1('0.00');
            return;
        } else if (!isNaN(Number(text1))) {
            setModalClient(client);
            axios.put('http://localhost:3003/clients/addfunds/' + id, { funds: text1 })
                .then(setLastUpdate(Date.now()));
            setTransaction(Number(text1).toFixed(2));
            setModalAddActive(true);
        } else {
            setModalEnterActive(true);

        }
        setText1('0.00');
    }

    const subtractSumm = id => {
        if (client.status === 2) {
            setMessage(<span>You can't do any operations with blocked account!</span>);
            setModalMessageActive(true);
            setText1('0.00');
            return;
        } else if (!isNaN(Number(text1))) {
            setModalClient(client);
            const deduction = Number((client.amount - Number(text1)).toFixed(2))
            if (deduction >= 0) {
                axios.put('http://localhost:3003/clients/subtructfunds/' + id, { funds: text1 })
                    .then(setLastUpdate(Date.now()));
                setTransaction(Number(text1).toFixed(2));
                setModalDeductActive(true);
            } else {
                setModalNotDeductActive(true);
            }

        } else {
            setModalEnterActive(true);
        }
        setText1('0.00');
    }


    const doDelAcc = _ => {
        if (client.status === 2) {
            setMessage(<span>You can't do any operations with blocked account!</span>);
            setModalMessageActive(true);
            return;
        } else if (client.amount === 0) {
            // setMessage(<ModalDelete setActive={setModalMessageActive} modalClient={modalClient} setModalClient={setModalClient}  />);
            // setModalMessageActive(true);
            setModalClient(client);
            setModalDeleteActive(true);
        } else {
            setModalNotDeleteActive(true);
        }
    }


    const blockUnblockAcc = _ => {
        setModalClient(client);
        setModalBlockActive(true);
    }

    const editAcc = _ => {
        setModalClient(client);
        setModalEditActive(true);
    }

    return (
        <div className="client">
            <div className="img">
                {
                    client.file ? <img src={client.file} alt=''></img> : <img src={noimage} alt=''></img>
                }
            </div>
            <div className='name'>{client.name}</div>
            <div className='lname'>{client.lname}</div>
            <div className='balance'>{client.amount ? client.amount.toFixed(2) : 0}</div>
            <div className='operational-ammount'><input id="elem1" type="text" value={text1} onChange={handleChange1} /></div>
            <div className='operation'>
                <button type='button' className="green small" onClick={() => addSum(client.id)}>Add</button>
                <button type='button' className="yellow small" onClick={() => subtractSumm(client.id)}>Writ off</button>
            </div>
            <div className='operation'>
                <button type='button' className="red small" onClick={doDelAcc}>Close Acc</button>
                <button type='button' className="pink small" onClick={blockUnblockAcc}>{client.status === 1 ? 'Block Acc' : 'Unblock Acc'}</button>
            </div>
            <button type='button' className="blue small" onClick={editAcc}>Edit Acc</button>
            {/* <ModalBlock active={modalBlockActive} setActive={setModalBlockActive} client={client} />
            <ModalEdit active={modalEditActive} setActive={setModalEditActive} client={client} /> */}
        </div>
    );
}

