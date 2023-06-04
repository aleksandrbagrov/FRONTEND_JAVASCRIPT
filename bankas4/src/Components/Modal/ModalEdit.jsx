import { useContext, useEffect, useState } from 'react';
import './modal.scss';
import axios from 'axios';
import { Store } from '../../Store';
import noimage from '../../images/no-photo.png';

const url = 'http://localhost:3003/clients/edit/';

export default function ModalEdit({ active, setActive, modalClient, setModalClient }) {

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');

    const { setLastUpdate, file, readFile, removeFile, setFile } = useContext(Store);


    useEffect(() => {
        if (null === modalClient) {
            return;
        }
        setName(modalClient.name);
        setLname(modalClient.lname);
        setFile(modalClient.file);
    }, [modalClient])

    const doName = e => {
        setName(e.target.value);
    }

    const doLname = e => {
        setLname(e.target.value);
    }

    const changeClient = () => {
        axios.put(url + modalClient.id, {
            name,
            lname,
            file
        })
            .then(res => {
                setLastUpdate(Date.now());

            })
            .catch(error => {
                console.log(error);
            });
        setModalClient(null);
        setActive(false);
    }

    const doCancel = () => {
        setModalClient(null);
        setActive(false);
    }


    if (null === modalClient) {
        return null;
    }


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal-contents active' : 'modal-contents'} onClick={e => e.stopPropagation()}>
                <h3 style={{ backgroundColor: 'gray' }}>Account Editing</h3>
                <h4>Please make the necessary changes in personal customer details</h4>
                <div className='input-fields'>
                    <label className="form-label" style={{ margin: "0 15px" }}>First Name</label>
                    <input type="text" value={name} onChange={doName} />
                </div>
                <div className='input-fields'>
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
                    <button type="button" className="green" onClick={changeClient} >Accept Changes</button>
                    <button type="button" className="yellow" onClick={doCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )

}