import logo from '../logo.svg';

export default function Logo() {
    return (
        <div className='ribbon'>
            <div className='logo'>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <p>React Virtual Internet Bank</p>
        </div>
    )
}