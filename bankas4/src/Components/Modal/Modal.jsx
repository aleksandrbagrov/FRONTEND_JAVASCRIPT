import { useContext, useEffect, useState } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';
import noimage from '../../images/no-photo.png';

const url = 'http://localhost:3003/clients';

export default function Modal() {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');

    const { modalActive, setModalActive, setRadio, setLastUpdate, file, readFile, removeFile, setFile } = useContext(Store);

    setFile(null);

    useEffect(() => {
        if (file === null) {
            return;
        }
        setFile(file);
    }, [file])

    const doName = e => {
        setName(e.target.value);
    }

    const doLname = e => {
        setLname(e.target.value);
    }

    const addClient = () => {
        axios.post(url, {
            name,
            lname,
            amount: 0,
            file,
            status: 1,
        })
            .then(res => {
                setLastUpdate(Date.now());

            })
            .catch(error => {
                console.log(error);
            });
        setRadio('A');
        setName('');
        setLname('');
        setFile(null);
        removeFile();
        setModalActive(false);
    }


    return (
        <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
            <div className={modalActive ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h3 style={{ backgroundColor: 'gray' }}>Opening a new account</h3>
                <h4>Please enter new customer details</h4>
                <div className='input'>
                    <label className="form-label" style={{ margin: "0 15px" }}>First Name</label>
                    <input type="text" value={name} onChange={doName} />
                </div>
                <div className='input'>
                    <label className="form-label" style={{ margin: "0 15px" }}>Family Name</label>
                    <input type="text" value={lname} onChange={doLname} />
                </div>
                <div className="input">
                    <input type="file" className="custom-file-input" onChange={readFile}></input>
                </div>
                <div className="img-modal">
                    {
                        file ? <img src={file} alt='client'></img> : <img src={noimage} alt='icon'></img>
                    }
                    {
                        file ? <div className="remove" onClick={removeFile}></div> : null
                    }
                </div>
                <div className='modal-buttons'>
                    <button type="button" className="green" onClick={addClient} >Add New Client</button>
                    <button type="button" className="yellow" onClick={() => setModalActive(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )

}