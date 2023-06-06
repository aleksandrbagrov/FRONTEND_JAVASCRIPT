import { useContext, useEffect } from "react";
import { Store } from "../Store";

export default function Stat2() {

    const { stat, clients, setLastUpdateStat } = useContext(Store);

    useEffect(() => {
        setLastUpdateStat(Date.now());
    }, [clients]);

    return (
        <div className="stat2">
            <div className="col">
                <p>Total Customers:   <span>{stat?.clientsNumber}</span></p>
                <p>Total Customers Funds:    <span>{stat?.totalClientsFunds}</span><span> €</span></p>

            </div>
            <div className="col">
                <p>Customers Without Photo:    <span>{stat?.clientsWithoutPhoto}</span></p>
                <p>Customers With Negative Ballance:   <span>{stat?.clientMinus}</span></p>
            </div>
            <div className="col">
                <p>Customers With Funds on the Account:   <span>{stat?.clientWithFunds}</span></p>
                <p>Customers With Zero Balance:   <span>{stat?.clientsWithoutFunds}</span></p>
            </div>
        </div>
    )
}