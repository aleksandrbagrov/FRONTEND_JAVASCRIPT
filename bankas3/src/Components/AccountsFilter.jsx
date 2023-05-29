import { useContext, useEffect } from "react";
import axios from "axios";
import { Store } from "../Store";


const url = 'http://localhost:3003/clients';

export default function AccountsFilter() {

    // const [radio, setRadio] = useState('A');

    const {setClient, radio, setRadio} = useContext(Store);

    const handleChange = r => {

        setRadio(r);

    }

    useEffect(() => {
        axios.get(url)
            .then(res => {
                switch (radio) {
                    case 'B':
                        setClient(res.data?.filter(c => c.balance !== 0));
                        break;
                    case 'C':
                        setClient(res.data?.filter(c => c.balance === 0));
                        break;
                    default:
                        setClient(res.data);
                }
            });
    }, [radio, setClient])

    return (
        <div className="filter">
            <fieldset>
                {/* <legend>Filter Accounts</legend> */}
                <div>
                    <input id="_Ar" type="checkbox" onChange={_ => handleChange('A')} checked={radio === 'A'} />
                    <label htmlFor="_Ar" >All Accounts</label>
                </div>
                <div>
                    <input id="_Br" type="checkbox" onChange={_ => handleChange('B')} checked={radio === 'B'} />
                    <label htmlFor="_Br">Accounts with Funds</label>
                </div>
                <div>
                    <input id="_Cr" type="checkbox" onChange={_ => handleChange('C')} checked={radio === 'C'} />
                    <label htmlFor="_Cr">Zero Funds Accounts</label>
                </div>
            </fieldset>
        </div>
    )

}