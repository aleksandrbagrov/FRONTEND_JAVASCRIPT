import './modal.scss';

export default function modalAdd({ active, setActive, children }) {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()}>
              {children}
            </div>
        </div>
    )

}