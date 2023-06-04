export default function RestrictedClient({ client }) {

    return (
        <div className="client">
            <div className='name shot'>{client.name}</div>
            <div className='lname shot'>{client.lname}</div>
            <div className='balance shot'>{client.amount ? client.amount.toFixed(2) : 0}</div>
        </div>
    );
}

