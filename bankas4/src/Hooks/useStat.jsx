// import axios from "axios";
// import { useEffect, useState } from "react";

// const CLIENTS_URL = 'http://localhost:3003/stat';


// export default function useStat() {

//     const [clients, setClient] = useState(null);

//     useEffect(() => {
//         axios.get(CLIENTS_URL)
//             .then(res => {
//                 console.log('Initial Rendering Stat', res.data.result );
//                 setClient(res.data.result);
//             }
//             )
//     },[]);
    
//     return [clients, setClient];

// }
