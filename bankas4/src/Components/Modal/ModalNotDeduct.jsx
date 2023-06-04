import './modal.scss';

export default function ModalNotDeduct({ active, setActive}) {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h4>You can't withdraw from the account an amount greater than the available!</h4>
            </div>
        </div>
    )

}