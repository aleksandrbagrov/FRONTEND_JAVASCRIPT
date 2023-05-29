import { useContext, useState } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

const url = 'http://localhost:3003/clients';

export default function Modal() {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');

    const { setClient, modalActive, setModalActive, setRadio } = useContext(Store);


    const doName = e => {
        setName(e.target.value);
    }

    const doLname = e => {
        setLname(e.target.value);
    }

    const addClient = () => {
        axios.post(url, {
            name,
            lname,
            balance: 0
        })
            .then(res => {
                setClient(res.data);
                setRadio('A');
                setModalActive(false);
                setName('');
                setLname('');
            });
    }


    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h3 style={{ backgroundColor: 'gray' }}>Opening a new account</h3>
                <h4>Please enter new customer details</h4>
                <div className='operational-ammount'>
                    <label className="form-label" style={{ margin: "0 15px" }}>First Name</label>
                    <input type="text" value={name} onChange={doName} />
                </div>
                <div className='operational-ammount'>
                    <label className="form-label" style={{ margin: "0 15px" }}>Family Name</label>
                    <input type="text" value={lname} onChange={doLname} />
                </div>
                <div className='modal-buttons'>
                    <button type="button" className="green" onClick={addClient} >Add New Client</button>
                    <button type="button" className="yellow" onClick={() => setModalActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )

}