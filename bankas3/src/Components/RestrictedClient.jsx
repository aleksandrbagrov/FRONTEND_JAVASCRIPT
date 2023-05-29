export default function Client({ client }) {

    return (
        <div className="client">
            <div className='name shot'>{client.name}</div>
            <div className='lname shot'>{client.lname}</div>
            <div className='balance shot'>{client.balance ? client.balance.toFixed(2) : 0}</div>
        </div>
    );
}

