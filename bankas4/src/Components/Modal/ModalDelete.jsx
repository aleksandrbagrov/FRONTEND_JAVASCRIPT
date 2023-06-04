import { useContext } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function ModalDelete({ active, setActive, modalClient, setModalClient }) {

    const { setLastUpdate, setFile } = useContext(Store);

    const delAcc = id => {
        if (modalClient?.amount === 0)
            axios.delete('http://localhost:3003/clients/deleteaccount/' + modalClient.id, { data: { id: id } })
                .then(setLastUpdate(Date.now()));
        setModalClient(null);
        setFile(null);
        setActive(false);
    }

    const doCancel = _ => {
        setModalClient(null);
        setFile(null);
        setActive(false);
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                    <h4>Do you really want to close the account?</h4>
                    <div className='modal-buttons'>
                        <button type="button" className="green" onClick={() => delAcc(modalClient?.id)}>Confirm</button>
                        <button type="button" className="yellow" onClick={doCancel}>Cancel</button>
                    </div>
            </div>
        </div>
    )

}