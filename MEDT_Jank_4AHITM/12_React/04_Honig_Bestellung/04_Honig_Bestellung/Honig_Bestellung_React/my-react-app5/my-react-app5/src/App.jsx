import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderForm from "./components/OrderForm.jsx";
import Confirmation from "./components/Confirmation.jsx";
import Completion from "./components/Completion";
import CompletionDisplay from "./components/CompletionDisplay";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<OrderForm />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/completion" element={<Completion />} />
                <Route path="/completion-display" element={<CompletionDisplay />} />
            </Routes>
        </Router>
    );
};

export default App;
