import { useContext, useEffect } from "react";
import { Store } from "../Store";

export default function Stat1() {

    const { stat, clients, setLastUpdateStat } = useContext(Store);

    useEffect(() => {
        setLastUpdateStat(Date.now());
    }, [clients]);

    return (
            <div className="stat">
                <div className="first-row">
                    <p>Total Customers:  <span>{stat?.clientsNumber}</span></p>
                    <p>Total customers funds:   <span>{stat?.totalClientsFunds}</span><span> €</span></p>
                </div>
                <div className="second-row">
                    <p>Average Acount Ammount:  <span>{stat?.averageBalance}</span><span> €</span></p>
                </div>
            </div>
    )
}