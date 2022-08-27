import React, { FormEvent, useState } from "react";
import ReactDom from 'react-dom';

export type address = {
    name: string;
    email: string;
};

const App: React.FC = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [addresses, setAddresses] = useState<address[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newAddress: address = {
            name,
            email,
        };
        setAddresses([...addresses, newAddress]);
        setName("");
        setEmail("");
    };

    return (
        <div>
            <h1>Nano CRM</h1>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="name">Name : </label>
                        <input id="name" value={name} onChange={e => setName(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="email">E-mail : </label>
                        <input id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </p>
                    <p>
                        <button type="submit">Add</button>
                    </p>
            </form>
            <hr />
            {addresses.length > 0 &&
                (<ul>
                    {addresses.map(element => <li key={element.email}>{element.name} : {element.email}</li>)}
                </ul>
                )
            }
        </div>
    );
};

ReactDom.render(<App />, document.getElementById("root"));