export default function Jura({ item }) {
    return (
        <>
            <h2>JURA</h2>
            <div style={{ color: item.color }}>{item.name}</div>          {
                AudioListener.type === 'man' ? <Valtis /> : null
            }
            {
                AudioListener.type === 'car' ? <Laivas /> : null
            }
            {
                AudioListener.type === 'animal' ? <Sala /> : null
            }
        </>
    )
}