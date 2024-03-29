import { useState } from 'react';

export default function Square({ client, setClient, setModalEnterActive, setModalDeleteActive, setModalClient, setModalAddActive, setModalNotDeleteActive, setModalDeductActive, setModalNotDeductActive, setTransaction }) {

    const [text1, setText1] = useState('0.00');


    const handleChange1 = e => {
        if (typeof (Number(e.target.value)) === 'number')
            setText1(e.target.value)
    }

    const addSum = _ => {
        if (!isNaN(Number(text1))) {
            setModalClient(client);
            setClient(clients => clients.map(s => client.id === s.id ? { ...s, balance: Number((client.balance + Number(text1)).toFixed(2)) } : { ...s }));
            setTransaction(Number(text1).toFixed(2));
            setModalAddActive(true);
        } else {
            setModalEnterActive(true);

        }
        setText1('0.00');
    }

    // EDIT

    const subtractSumm = _ => {
        if (!isNaN(Number(text1))) {
            setModalClient(client);
            const deduction = Number((client.balance - Number(text1)).toFixed(2)) //>= 0 ? Number((client.balance - Number(text1)).toFixed(2)) : client.balance;
            if (deduction >= 0) {
                setClient(clients => clients.map(s => client.id === s.id ? { ...s, balance: deduction } : { ...s }));
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


    const delAcc = _ => {
        if (client.balance === 0) {
            setModalClient(client);
            setModalDeleteActive(true);
        } else {
            console.log('render not delete');
            setModalNotDeleteActive(true);
        }
    }

    return (
        <div className="client">
            <div className='name'>{client.name}</div>
            <div className='lname'>{client.lname}</div>
            <div className='balance'>{client.balance.toFixed(2)}</div>
            <div className='operational-ammount'><input id="elem1" type="text" value={text1} onChange={handleChange1} /></div>
            <div className='operation'>
                <button className="green small" onClick={addSum}>Add</button>
                <button className="yellow small" onClick={subtractSumm}>Writ off</button>
            </div>
            <button className="red" onClick={delAcc}>Close an account</button>
            <div></div>
        </div>
    );
}

