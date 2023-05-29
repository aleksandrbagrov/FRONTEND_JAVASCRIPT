import axios from "axios";
import { useEffect, useState } from "react";

const CLIENTS_URL = 'http://localhost:3003/clients';


export default function useClients() {

    const [clients, setClient] = useState(null);

    useEffect(() => {
        axios.get(CLIENTS_URL)
            .then(res => {
                setClient(res.data);
            }
            )
    },[]);
    
    return [clients, setClient];

}
