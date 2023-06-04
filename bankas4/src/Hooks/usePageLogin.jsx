import { useEffect, useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3003/login';
const LOGOUT_URL = 'http://localhost:3003/logout';

export default function usePageLogin() {

    const [requestData, setRequestData] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const _setRequestData = data => {
        let validated;
        if (data.action === 'login') {
            validated = {
                pass: data.pass || '',
                username: data.username || ''
            }

        } else if (data.action === 'logout') {
            validated = {
                id: data.id || 0,
            }
        }
        setRequestData({ validated, action: data.action });
    }

    useEffect(() => {
        if (requestData === null) {
            return;
        }

        if (requestData.action === 'login') {
            axios.post(LOGIN_URL, requestData.validated)
                .then(res => {
                    setResponseData(res.data);
                })
        } else if (requestData.action === 'logout') {
            axios.post(LOGOUT_URL + '/' + requestData.validated.id)
                .then(res => {
                    setResponseData(res.data);
                })
        }
    }, [requestData]);

    return [responseData, _setRequestData]
}