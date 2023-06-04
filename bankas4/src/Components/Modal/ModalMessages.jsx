import './modal.scss';

export default function ModalMessages({ active, setActive, children }) {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-content'} onClick={e => e.stopPropagation()}>
                <h4>
                    {children}
                </h4>
            </div>
        </div>
    )

}