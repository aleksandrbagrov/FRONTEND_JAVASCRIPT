import './modal.scss';

export default function ModalVrongEnter({ modalEnterActive, setModalEnterActive }) {

    return (
        <div className={modalEnterActive ? 'modal active' : 'modal'} onClick={() => setModalEnterActive(false)}>
            <div className={modalEnterActive ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h4>Please check that the data entered is correct.</h4>
            </div>
        </div>
    )

}