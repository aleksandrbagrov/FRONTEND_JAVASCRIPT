import './modal.scss';

export default function modalAdd({ active, setActive, modalClient, transaction }) {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                {console.log(modalClient)}
                <h4><span>{modalClient?.name}</span> <span>{modalClient?.lname}</span> bank account was replenished with <span>{transaction}</span> €</h4>
            </div>
        </div>
    )

}