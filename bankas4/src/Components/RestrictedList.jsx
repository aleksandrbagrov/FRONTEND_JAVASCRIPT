import { useContext } from 'react';
import AccountsFilter from './AccountsFilter';
import { Store } from '../Store';
import RestrictedClient from './RestrictedClient';
import Stat2 from './Stat2';

function RestrictedList() {

    const {clients, setClient, radio } = useContext(Store);


    return (
        <div className="App">
            <header className="App-header">
                <Stat2 />
                <AccountsFilter />
                <div className='clients-header restricted'>
                    <div className='name shot'>Name</div>
                    <div className='lname shot'>Family Name</div>
                    <div className='balance shot'>Account Balance, €</div>
                </div>

                <div className='clients restricted'>

                    <div className='client'>

                    </div>
                    {
                        clients?.map(client => <RestrictedClient key={client.id} client={client} setClient={setClient} radio={radio}  />)
                    }
                </div>
            </header>
        </div >
    );

}

export default RestrictedList;