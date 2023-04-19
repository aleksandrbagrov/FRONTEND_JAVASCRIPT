import { useState } from 'react';
// import randColor from '../../Functions/randColor';

export default function Square({ client, setClient }) {

    const [text1, setText1] = useState('0.00');


    const handleChange1 = e => {
        // console.log(typeof e.target.value);
        if (typeof (Number(e.target.value)) === 'number')
            setText1(e.target.value)
    }

    const addSum = _ => {
        if (!isNaN(Number(text1))) {
            setClient(clients => clients.map(s => client.id === s.id ? { ...s, balance: client.balance + Number(text1) } : { ...s }));
        }
        setText1('0.00');
    }

    // EDIT
    const subtractSumm = _ => {
        if (!isNaN(Number(text1))) {
            setClient(clients => clients.map(s => client.id === s.id ? { ...s, balance: client.balance - Number(text1) } : { ...s }));
        }
        setText1('0.00');
    }

    const delAcc = _ => {
        setClient(s => s.filter(s => client.id !== s.id));
    }

    return (
        <div className="client">
            <div className='name'>{client.name}</div>
            <div className='lname'>{client.lname}</div>
            <div className='balance'>{client.balance.toFixed(2)}</div>
            <div className='operational-ammount'><input id="elem1" type="text" value={text1} onChange={handleChange1} /></div>
            <div className='operation'>
                <button className="green small" onClick={addSum}>Prideti</button>
                <button className="yellow small" onClick={subtractSumm}>Nuskaičiuoti</button>
            </div>
            <button className="red" onClick={delAcc}>Uždaryti</button>
            <div></div>
        </div>
    );
}

