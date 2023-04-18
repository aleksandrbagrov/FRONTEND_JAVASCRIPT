export default function Bala({data}) {

    return (
        <div>
        <span style={{margin: "10px"}}>{data.id}</span>
        <span style={{margin: "10px"}}>{data.type}</span>
        <span style={{margin: "10px"}}>{data.name}</span>
        <span style={{margin: "10px"}}>{data.color}</span>
        </div>
    )
}