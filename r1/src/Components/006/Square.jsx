import ZanaBazar from "./ZanaBazar";

export default function Square({niceColor, letter}) {

    return (
        <div className="square zana" style={{
            backgroundColor: niceColor,
            borderColor: niceColor
        }}>
            {
                letter > 30 ? letter : <ZanaBazar letter={letter} />
            }
            
        </div>
    );
}
