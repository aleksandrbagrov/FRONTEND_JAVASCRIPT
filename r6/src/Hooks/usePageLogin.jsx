import { useEffect, useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3003/login';

export default function usePageLogin() {

    const [sentData, set SentData] = useState(null);

    useEffect(() => {
        if(sentData === null) {
            return;
        }

        axios.post(LOGIN_URL, sentData)
        .then(res => {
            console.log(res.data);
        })
    }, [sentData]);

}