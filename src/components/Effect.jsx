import { useState, useEffect } from "react";

function Effect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = "Count: " + count;
        console.log("Effect ran") 
    }, [count])

    console.log("Component rendered")

    return (
        <>
            <h2>{count}</h2> <br />
            <button onClick={() => setCount(count + 1)}> + </button>
        </>
    );
}

export default Effect;