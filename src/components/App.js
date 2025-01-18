import React from "react";
import Header from "./Header";
import "./App.css"; // Ensure you have styles here or create your own styles

// Import your spinning wheel component
import spinnerImage from "./assets/spinnerwinner.png";
import TokenIcon from "./components/TokenIcon";
import PrizeIcon from "./components/PrizeIcon";
import FutureTokenIcon from "./components/FutureTokenIcon";

function App() {
  return (
    <div>
      <img src={spinnerImage} alt="Spinner Logo" />
      <h1>Spin Wheel App</h1>
    </div>
  );
}
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 3000);
  return () => clearTimeout(timer);
}, []);

return isLoading ? <SplashScreen /> : <SpinWheel />;

export default App;


