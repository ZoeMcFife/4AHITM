import { useState } from "react";

const Completion = () => {
    const [endData, setEndData] = useState({
        name: "",
        location: "",
        email: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setEndData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("endData", JSON.stringify(endData));
        // Weiter zur Abschlussanzeigeseite
        window.location.href = "/completion-display";
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={endData.name} onChange={handleChange} /><br /><br />
            {/* Weitere Eingabefelder für Standort und E-Mail */}
            <button type="submit">Abschließen</button>
        </form>
    );
};

export default Completion;
