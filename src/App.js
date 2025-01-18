import React, { useState } from "react";
import spinnerImage from "./assets/spinnerwinner.png";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [prize, setPrize] = useState(null);

  const handleSpin = async () => {
    setIsSpinning(true);
    try {
      const response = await fetch("http://localhost:3001/api/spin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userAddress: "0xD0eCD84F904aB6142135d1e4Bb2B9841B2A5Fcc8", // Replace dynamically for actual users
          paymentHash: "dummy-payment-hash", // Placeholder for real payment proof
        }),
      });

      const data = await response.json();
      setPrize(data.prize || "No Prize");
    } catch (error) {
      console.error("Spin failed:", error);
      setPrize("Error spinning the wheel");
    } finally {
      setIsSpinning(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Spin the Wheel</h1>
      <img src={spinnerImage} alt="Spinner" style={{ width: "200px", margin: "20px auto" }} />
      <button
        onClick={handleSpin}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "white",
          backgroundColor: "#4caf50",
          border: "none",
          borderRadius: "5px",
        }}
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin Now"}
      </button>
      {prize && <h2 style={{ marginTop: "20px" }}>Prize: {prize}</h2>}
    </div>
  );
}

export default App;
