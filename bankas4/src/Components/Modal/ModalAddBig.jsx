import { useContext } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function ModalAddBig({ active, setActive, setMessage, setModalMessageActive, modalClient, transaction }) {

    const { setLastUpdate } = useContext(Store);

    const addBigSum = id => {
            axios.put('http://localhost:3003/clients/addfunds/' + id, { funds: transaction })
                .then(setLastUpdate(Date.now()));
            setMessage(<><span>{modalClient?.name}</span> <span>{modalClient?.lname}</span> bank account was replenished with <span>{transaction}</span><span>€</span></>);
            setActive(false);
            setModalMessageActive(true);
    }

    const doCancel = _ => {;
        setActive(false);
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                    <h4>Do you really want to top up {modalClient?.name} {modalClient?.lname} account with {transaction} euros?</h4>
                    <div className='modal-buttons'>
                        <button type="button" className="green" onClick={() => addBigSum(modalClient.id)}>Confirm</button>
                        <button type="button" className="yellow" onClick={doCancel}>Cancel</button>
                    </div>
            </div>
        </div>
    )

}