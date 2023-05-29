import { useContext, useEffect } from "react";
import { Store } from "../Store";
import axios from "axios";

const url = 'http://localhost:3003/clients';

export default function Stat() {

    // const { clients, setClient, pageSlug } = useContext(Store);
    const { clients, pageSlug, radio, setRadio, setClient } = useContext(Store);

    if (pageSlug === 'home') {
        setRadio('A');
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
        <div className="stat">
            <p>Total Customers:  <span>{clients?.length}</span></p>
            <p>Total customers funds:   <span>
                {
                    clients?.reduce((acc, client) => acc + client.balance, 0).toFixed(2).toString()
                }
            </span><span> €</span>
            </p>

        </div>
    )

}