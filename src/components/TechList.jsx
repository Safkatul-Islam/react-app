import { useState } from "react";

const techs = ["JavaScript", "Python", "Java"];

function TechList() {
    const [techList, setTechList] = useState(techs);
    return (
        <ul>
            {techList.map((tech, techKey) => (
                <li key={techKey}>{tech}</li>
            ))}

            <button onClick={() => setTechList([...techList, "React"])}>Add React</button>
        </ul>
    );
}

export default TechList;