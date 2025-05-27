const CompletionDisplay = () => {
    const orderData = JSON.parse(localStorage.getItem("orderData"));
    const endData = JSON.parse(localStorage.getItem("endData"));

    return (
        <div>
            <h2>Bestellungsabschluss</h2>
            {orderData && endData ? (
                <>
                    <p>Akazienhonig: {orderData.akazienhonig}</p>
                    {/* Weitere Daten anzeigen */}
                    <p>Name: {endData.name}</p>
                    {/* Weitere Daten anzeigen */}
                </>
            ) : (
                <p>Es wurden keine Bestelldaten gefunden.</p>
            )}
        </div>
    );
};

export default CompletionDisplay;
