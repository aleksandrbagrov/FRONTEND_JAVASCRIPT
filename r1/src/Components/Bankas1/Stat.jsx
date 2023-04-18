export default function Stat({ clients }) {

    return (
        <div style={{
            position: 'relative',
            top: '-785px',
            right: '-442px',
            width: '300px',
            border: '1px solid white',
            padding: '15px',
            fontFamily: 'monospace',
            fontSize: '50px',
            color: "yellowgreen",
        }}>

            {
                /* {('' + sq.length).padStart(2, '0')} */
                clients?.reduce((acc, client) => acc + client.balance, 0).toFixed(2)
            }


        </div>
    )

}