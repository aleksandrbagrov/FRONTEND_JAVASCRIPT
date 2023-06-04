import { useContext } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function ModalBlock({ active, setActive, modalClient }) {

    const { setLastUpdate } = useContext(Store);

    const blocUnblockkAcc = id => {
            axios.put('http://localhost:3003/clients/blockaccount/' + id, { status: modalClient?.status === 1 ? 2 : 1 })
            .then(res => {
                setLastUpdate(Date.now());

            });
            setActive(false);
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h4>{
                    modalClient?.status === 1 
                    ? 'Do you really want to block the account?'
                    : 'Do you really want to unblock the account?' 
                    }</h4>
                <div className='modal-buttons'>
                    <button type="button" className="green" onClick={() => blocUnblockkAcc(modalClient?.id)}>Confirm</button>
                    <button type="button" className="yellow" onClick={() => setActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )

}