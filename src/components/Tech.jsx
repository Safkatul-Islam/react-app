import { useState } from "react";

function Tech() {
    // State 1: Holds the text currently being typed
    const [newTech, setTech] = useState("");

    // State 2: Holds the list of added technologies
    // We will store Objects now, not just strings, so we can have IDs
    const [techList, setTechList] = useState([]);

    // This function runs when the user hits "Enter" or clicks "Add"
    const handleSubmit = (e) => {
        // 1. STOP the browser from refreshing the page
        e.preventDefault();

        // 2. Validation: Don't add empty strings
        // .trim() removes spaces from start/end. "   " becomes ""
        if(newTech.trim() === "") return;

        // 3. Create a new "Task Object" with a unique ID
        const techObject = {
            id: Date.now(),  // Uses current timestamp as a unique ID
            name: newTech
        };

        // 4. Update the List State
        // We create a NEW array: [ ...oldItems, newItem ]
        setTechList([...techList, techObject]);

        // 5. Clear the Input
        // We set state back to "", so the input value becomes empty
        setTech("");
    };

    return (
        <div>
            {/* We use a <form> with onSubmit.
                This allows the "Enter" key to trigger the function automatically.
            */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    // CONTROLLED: The input only shows what React allows
                    value={newTech}
                    // LISTENER: When user types, update React state immediately
                    onChange={(e) => setTech(e.target.value)}
                    placeholder="Enter a technology..."
                />
                <button type="submit">Add Tech</button>
            </form>

            <ul>
                {techList.map((tech) => (
                    // Now we use the Unique ID for the key. Safe!
                    // We render tech.name because tech is now an object.
                    <li key={tech.id}>
                        {tech.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tech;