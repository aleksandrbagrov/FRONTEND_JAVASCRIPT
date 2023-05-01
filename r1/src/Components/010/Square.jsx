export default function Square({dog, color}) {
console.log(color);
    return (
        <div className="square">
            {
                <span style={{color: color}}>{dog}</span>
            }           
        </div>
    );
}