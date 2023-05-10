import { useState } from 'react';
import axios from 'axios';

export default function Square({ client, setClient, setModalEnterActive, setModalDeleteActive, setModalClient, radio, setModalAddActive, setModalNotDeleteActive, setModalDeductActive, setModalNotDeductActive, setTransaction }) {

    const [text1, setText1] = useState('0.00');


    const handleChange1 = e => {
        if (typeof (Number(e.target.value)) === 'number')
            setText1(e.target.value)
    }

    // EDIT

    const addSum = id => {
        if (!isNaN(Number(text1))) {
            setModalClient(client);
            console.log('balance', client.balance)
            axios.put('http://localhost:3003/clients/addfunds/' + id, { funds: text1})
            .then(res => {
                switch (radio) {
                    case 'B':
                        setClient(res.data?.filter(c => c.balance !== 0));
                        break;
                    case 'C':
                        setClient(res.data?.filter(c => c.balance === 0));
                        break;
                    default:
                        setClient(res.data);
                } 
            });

            setTransaction(Number(text1).toFixed(2));
            setModalAddActive(true);
        } else {
            setModalEnterActive(true);

        }
        setText1('0.00');
    }

    // EDIT

    const subtractSumm = id => {
        if (!isNaN(Number(text1))) {
            setModalClient(client);
            const deduction = Number((client.balance - Number(text1)).toFixed(2)) //>= 0 ? Number((client.balance - Number(text1)).toFixed(2)) : client.balance;
            if (deduction >= 0) {
                axios.put('http://localhost:3003/clients/subtructfunds/' + id, { funds: text1})
                .then(res => {
                    switch (radio) {
                        case 'B':
                            setClient(res.data?.filter(c => c.balance !== 0));
                            break;
                        case 'C':
                            setClient(res.data?.filter(c => c.balance === 0));
                            break;
                        default:
                            setClient(res.data);
                    } 
                });
                
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
            setModalNotDeleteActive(true);
        }
    }

    return (
        <div className="client">
            <div className='name'>{client.name}</div>
            <div className='lname'>{client.lname}</div>
            <div className='balance'>{client.balance ? client.balance.toFixed(2) : 0}</div>
            <div className='operational-ammount'><input id="elem1" type="text" value={text1} onChange={handleChange1} /></div>
            <div className='operation'>
                <button className="green small" onClick={() => addSum(client.id)}>Add</button>
                <button className="yellow small" onClick={() => subtractSumm(client.id)}>Writ off</button>
            </div>
            <button className="red" onClick={delAcc}>Close an account</button>
            <div></div>
        </div>
    );
}

