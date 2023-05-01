export default function TwoProps({ text1, text2, color }) {

    return (
        <div style={{color: color}}>
            <h1>{text1}</h1>
            <h2>{text2}</h2>
        </div>
    )
}