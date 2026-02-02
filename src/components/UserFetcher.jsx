import { useState, useEffect } from "react";

function UserFetcher() {
    const [id, setId] = useState(1);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setUser(data);
        });
    }, [id]);

    /* if (!user) {
        return <div>Loading...</div>
    } */
    
    return (
        <div>
            <h2>User ID: {id}</h2>
            <h3>Name: {user?.name || "Loading..."}</h3>
            <h3>Email: {user?.email || "Loading..."}</h3>
            <h3>Phone: {user?.phone || "Loading..."}</h3>
            <button onClick={() => setId(id + 1)}>Next User (+)</button>
            <button onClick={() => id > 1 && setId(id - 1)}>Prev User (-)</button>
        </div>
    );
}

export default UserFetcher;