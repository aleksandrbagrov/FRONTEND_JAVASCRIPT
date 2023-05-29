import { useContext } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';

export default function ModalDelete({ active, setActive, modalClient, setClient }) {

    const {radio} = useContext(Store);

    const delAcc = id => {
        console.log('inside');
        if (modalClient.balance === 0)
            axios.delete('http://localhost:3003/clients/deleteaccount/' + id, { data: { id: id } })
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
                    setActive(false);
                });
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h4>Do you really want to close the account?</h4>
                <div className='modal-buttons'>
                    <button type="button" className="green" onClick={() => delAcc(modalClient.id)}>Confirm</button>
                    <button type="button" className="yellow" onClick={() => setActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )

}