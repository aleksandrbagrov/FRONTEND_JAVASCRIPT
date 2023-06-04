import axios from "axios";
import { useEffect, useState } from "react";

const CLIENTS_URL = 'http://localhost:3003/clients';


export default function useClients() {

    const [clients, setClient] = useState(null);
    const [radio, setRadio] = useState('A');
    const [lastUpdate, setLastUpdate] = useState(Date.now());


    // GET CLIENTS BY FILTER / RADIO BUTTON

    useEffect(() => {
        const getClients = _ => axios.get(CLIENTS_URL)
            .then(res => {
                switch (radio) {
                    case 'B':
                        setClient(res.data.result?.filter(c => c.amount !== 0));
                        break;
                    case 'C':
                        setClient(res.data.result?.filter(c => c.amount === 0));
                        break;
                    default:
                        setClient(res.data.result);
                }
            });
        getClients();
    }, [radio, lastUpdate])

    return [clients, setClient, radio, setRadio, lastUpdate, setLastUpdate];

}
