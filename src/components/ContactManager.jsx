import { useState } from "react";

function ContactManager() {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[contacts, setContacts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.trim() === "" || email.trim() ==="") return;

        const contactObj = {
            id: Date.now(),
            name: name,
            email: email
        };

        setContact([...contacts, contactObj]);

        setName("");
        setEmail("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name" 
                    />
                </label>
                <label>
                    Email:
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter valid email"
                    />
                </label>

                <button type="submit">Add Contact</button>
            </form>

            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <strong>{contact.name}</strong> <br />
                        {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactManager;