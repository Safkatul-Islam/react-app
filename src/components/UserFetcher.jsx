import { useState, useEffect } from "react";

function UserFetcher() {
    const [id, setId] = useState(1);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);  // Start true

    useEffect(() => {
        // Define async function inside effect
        const userData = async () => {
            setLoading(true);  // Start loading
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
                const data = response.json();
                setUser(data);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            } finally {
                setLoading(false);  // Stop loading (success or fail)
            }
        };

        userData();
    }, [id]);

    /* if (!user) {
        return <div>Loading...</div>
    } */
    
    return (
        <div>
            <h2>User ID: {id}</h2>

            {/* Conditional Rendering: Show ONE loader for the whole block */}
            {loading ? (
                <p>Loading user data...</p>
            ) : (
                <>
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Phone: {user.phone}</h3>
                </>
            )}

            <button onClick={() => setId(id + 1)}>Next User (+)</button>
            <button onClick={() => id > 1 && setId(id - 1)}>Prev User (-)</button>
        </div>
    );
}

export default UserFetcher;