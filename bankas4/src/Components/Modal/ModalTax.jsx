import { useContext } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function ModalTax({ active, setActive, setMessage, setModalMessageActive }) {

    const tax = 5;

    const { setLastUpdate } = useContext(Store);

    const subtractTax = _ => {
                axios.put('http://localhost:3003/clients/tax/', { tax })
                .then(setLastUpdate(Date.now()));
                setMessage(<span>You just collected the air tax from all your customers</span>);
                setActive(false);
                setModalMessageActive(true);
    }

    const doCancel = _ => {;
        setActive(false);
    }


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                    <h4>Do you really want to deduct air tax from all customers?</h4>
                    <div className='modal-buttons'>
                        <button type="button" className="green" onClick={() => subtractTax()}>Confirm</button>
                        <button type="button" className="yellow" onClick={doCancel}>Cancel</button>
                    </div>
            </div>
        </div>
    )

}