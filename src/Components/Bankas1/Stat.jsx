export default function Stat({ clients }) {

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