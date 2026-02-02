import { useState, useEffect } from "react";

function UserFetcher() {
    const [id, setId] = useState(1);
    const [user, setUser] = useState("Loading...");

    useEffect(() => {
        console.log("Fetching data for user: " + id);
        setUser("Loading...");
        setTimeout(() => {
            setUser("Name for user " + id);
        }, 1000)
    }, [id]);

    return (
        <div>
            <h1>User ID: {id}</h1>
            <h2>Name: {user}</h2>
            <button onClick={() => setId(id + 1)}>Next User (+)</button>
            <button onClick={() => id > 1 && setId(id - 1)}>Prev User (-)</button>
        </div>
    );
}

export default UserFetcher;