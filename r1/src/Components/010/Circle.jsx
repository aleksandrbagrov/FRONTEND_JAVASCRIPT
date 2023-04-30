export default function Circle({dog, id}) {
    console.log(id);

    return (
        <div className="circle">
        {
            <>
            <span>{dog}</span>
            <br/>
            <span>{id}</span>
            </>
        }           
    </div>
    )
}