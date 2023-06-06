import axios from "axios";
import { useEffect, useState } from "react";


const STAT_URL = 'http://localhost:3003/stat';


export default function useStat() {

    const [stat, setStat] = useState(null);
    const [lastUpdateStat, setLastUpdateStat] = useState(Date.now());

    useEffect(() => {
        axios.get(STAT_URL)
            .then(res => {
                setStat(res.data);
            }
            );
            
    },[]);

    useEffect(() => {
        axios.get(STAT_URL)
            .then(res => {
                setStat(res.data);
            }
            );       
    },[lastUpdateStat]);

    return [stat, setLastUpdateStat];
}
