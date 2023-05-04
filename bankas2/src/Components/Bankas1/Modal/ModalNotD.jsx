import './modal.scss';

export default function ModalNotD({ modalNotDeleteActive, setModalNotDeleteActive}) {

    return (
        <div className={modalNotDeleteActive ? 'modal active' : 'modal'} onClick={() => setModalNotDeleteActive(false)}>
            <div className={modalNotDeleteActive ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h4>You can't delete a non-zero account!</h4>
            </div>
        </div>
    )

}