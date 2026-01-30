import { useState } from "react";

function TechList() {
  // Initial state can be defined inside too
  const [techList, setTechList] = useState(["JavaScript", "Python", "Java"]);

  const addTech = () => {
    // Guard Clause: Prevent duplicates if using string as key
    if (techList.includes("React")) return;

    setTechList([...techList, "React"]);
  };

  return (
    <div>   {/* Wrap in a div to keep HTML valid */}
      <ul>
        {techList.map((tech) => (
          // Use the value as key (if unique)
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {/* Button lives outside the list */}
      <button onClick={addTech}>Add React</button>
    </div>
  );
}
