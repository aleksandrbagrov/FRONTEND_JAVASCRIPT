import Daiktas from "./Daiktas";

export default function Tvenkinis({ data }) {
    const evenIdItems = data.filter(item => item.id % 2);
    console.log(evenIdItems);
    const oddIdItems = data.filter(item => !(item.id % 2));
    console.log(oddIdItems);
    return (
        <>
            <div className="data-table">
                <h2>Even Id Elements</h2>
                {
                    evenIdItems.map(item => <Daiktas key={evenIdItems.id} data={item} />)
                }
            </div>
            <div className="data-table">
                <h2>Odd Id Elements</h2>
                {
                    oddIdItems.map(item => <Daiktas key={oddIdItems.id} data={item} />)
                }
            </div>

            <div className="data-table">
                <h2>Odd Id Elements</h2>
                {
                    oddIdItems.map(item => <Daiktas key={oddIdItems.id} data={item} />)
                }
            </div>
        </>
    )
}