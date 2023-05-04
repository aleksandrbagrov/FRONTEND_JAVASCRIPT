import './modal.scss';
import axios from 'axios';

export default function ModalDelete({ active, setActive, modalClient, setClient }) {

    const delAcc = id => {
        console.log('inside');
        if (modalClient.balance === 0)
            // setClient(s => s.filter(s => modalClient.id !== s.id));

            axios.delete('http://localhost:3003/clients/deleteaccount/' + id, { data: { id: id } })
            .then(res => {
                setClient(res.data)
            });
    }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <>
                    <h4>Do you really want to close the account?</h4>
                    <form>
                        <div className='modal-buttons'>
                            <button className="green"  onClick={() => delAcc(modalClient.id)}>Confirm</button>
                            <button className="yellow" onClick={() => setActive(false)}>Cancel</button>
                        </div>
                    </form>
                </>
            </div>
        </div>
    )

}