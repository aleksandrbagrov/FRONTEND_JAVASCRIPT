import { v4 as uuidv4 } from 'uuid';

export default function Create({ clients, setClient }) {

    const create = _ => {
        const creature = {
            id: uuidv4(),
            type: 'private',
            name: 'Jonas',
            color: 'Jonaitis',
        }
        // CREATE
        setClient(s => [...s, creature]);
    }



    return (
        <>
            <h2>CREATE NEW</h2>
            <button className="green" onClick={create}>Create new</button>
        </>
    );
}