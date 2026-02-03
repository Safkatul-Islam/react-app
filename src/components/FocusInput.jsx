import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef(null);

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={() => inputRef.current?.focus()}>Focus the Input</button>
        </div>
    );
}

export default FocusInput;