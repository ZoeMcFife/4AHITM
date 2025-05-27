import {useState} from "react";
const OrderForm = () => {
    const [formData, setFormData] = useState({
        akazienhonig: 0,
        heidehonig: 0,
        kleehonig: 0,
        tannenhonig: 0
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("orderData", JSON.stringify(formData));
        // Weiter zur Bestellungsbestätigungsseite
        window.location.href = "/confirmation";
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="akazienhonig">Akazienhonig:</label>
                <input type="number" id="akazienhonig" min="0" value={formData.akazienhonig} onChange={handleChange} />
            </div>
            {/* Weitere Eingabefelder für andere Honigsorten */}
            <button type="submit">Bestellen</button>
        </form>
    );
};

export default OrderForm;
