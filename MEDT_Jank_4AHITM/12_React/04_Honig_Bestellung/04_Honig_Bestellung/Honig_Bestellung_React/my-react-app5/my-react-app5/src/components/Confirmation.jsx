const Confirmation = () => {
    const orderData = JSON.parse(localStorage.getItem("orderData"));

    return (
        <div>
            <h2>Bestellungsbestätigung</h2>
            {orderData ? (
                <>
                    <p>Akazienhonig: {orderData.akazienhonig}</p>
                    {/* Weitere Daten anzeigen */}
                </>
            ) : (
                <p>Es wurden keine Bestelldaten gefunden.</p>
            )}
            <a href="/completion">Weiter</a>
        </div>
    );
};

export default Confirmation;
