import './modal.scss';

export default function modalDeduct({ active, setActive, modalClient, transaction }) {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                {console.log(modalClient)}
                <h4><span>{transaction}</span> € were debited from the bank account of <span>{modalClient?.name}</span> <span>{modalClient?.lname}</span></h4>
            </div>
        </div>
    )

}