import Stat from "./Stat";

export default function Square({squares, setSquare}) {

    const add = _ => {
        squares.map(s => s.id === sq.id ? setSquare(s => s.counter + 1) : null);
    }

    return (
        <div className="square">
                <Stat sq={square.counter} />
                <button className="green" onClick={add}>+</button>
        </div>
    );
}