import { useState } from "react";

function Tech() {
    const [newTech, setTech] = useState("");
    const [techList, setTechList] = useState([]);

    const addTech = () => {
        if (newTech.length === 0) return;

        setTechList([...techList, newTech]);

        setTech("");
    };

    return (
        <div>
            <ul>
                {techList.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
            <button onClick={addTech}>Add</button>
            <input type="text" value={newTech} onChange={(e) => setTech(e.target.value)}/>
        </div>
    );
}

export default Tech;