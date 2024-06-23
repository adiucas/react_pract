import { useState } from "react";

const App = () => {
    const [names, setNames] = useState([
        { id: '1', name: 'adi' },
        { id: '2', name: 'joy' },
        { id: '3', name: 'tutul' }
    ]);

    return (
        <>
            <ul>
                {names.map((name) => (
                    <li key={name.id}>{name.id} {name.name}</li>
                ))}
            </ul>
        </>
    );
}

export default App;