import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // Best Practice: Define the logic separately. standard industry practice 
    // is to pull logic out of the JSX return statement. This keeps HTML clean and readable.
    const handleDecrement = () => {
        if(count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>

            {/* Pass the function reference */}
            <button onClick={handleDecrement}> - </button>
        </div>
    );
}

export default Counter;