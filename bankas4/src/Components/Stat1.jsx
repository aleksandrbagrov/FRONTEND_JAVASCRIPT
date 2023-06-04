import { useContext } from "react";
import { Store } from "../Store";


// const url = 'http://localhost:3003/stat';

export default function Stat() {

    const { stat, setStat, clients } = useContext(Store);

    return (
        <div className="stat">
            <p>Total Customers:  <span>{clients !== null ? clients?.length.toString() : 0}</span></p>
            <p>Total customers funds:   <span>
                {
                    clients !== null 
                    ? clients?.reduce((acc, client) => acc + client.amount, 0).toFixed(2).toString()
                    : 0
                }
            </span><span> €</span>
            </p>

        </div>
    )

}