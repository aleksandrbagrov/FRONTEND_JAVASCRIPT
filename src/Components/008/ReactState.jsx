import { useState } from "react"
import rand from './Functions/rand';

export default function ReactState() {

    const [shape, setShape] = useState(null);
    const [count, setCount] = useState(rand(5, 25));

    const doShape = _ => {
        setShape(s => s ? null : '50%')
    }

    return (
        <div>
            <div className="squares">
                <div className="square" style={{
                    borderRadius: shape,
                }}></div>
            </div>
            <div className="flex">
                <button className="blue" onClick={doShape}>change</button>
                <button className="yellow">random</button>
            </div>

        </div>
    )
}