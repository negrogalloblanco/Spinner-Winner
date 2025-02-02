import React, { useState } from "react";

// Prizes for each spin
const prizes = ["CToken for Raffle Entry","CToken for Raffle Entry","CToken for Raffle Entry","CToken for Raffle Entry"];

const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [raffleNumber, setRaffleNumber] = useState(null);
  const [starPosition, setStarPosition] = useState(0);

  const spinTheWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setRaffleNumber(null);

    // Generate a random raffle number
    const randomRaffleNumber = Math.floor(1000000 + Math.random() * 900000); // 6-digit number

    // Spin logic
    const totalDuration = 1000; // 3 seconds
    const totalSteps = 360 * 1.98552; // 10 full rotations
    let currentStep = 0;
    const intervalTime = totalDuration / totalSteps;

    const interval = setInterval(() => {
      currentStep += 1;

      // Move the star position
      setStarPosition((prev) => (prev + 8.5) % 360); // Fast spin (increments by 10 degrees)

      if (currentStep >= totalSteps) {
        clearInterval(interval);

        // Stop at the final position
        setStarPosition(randomRaffleNumber % 360); // Modulo ensures it aligns with the random number
        setRaffleNumber(randomRaffleNumber); // Set the raffle number

        setIsSpinning(false);
      }
    }, intervalTime);
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>World Raffle</h1>
      <div style={circleContainerStyle}>
        <div style={{ ...starStyle, transform: `rotate(${starPosition}deg)` }}>
          <div style={starInnerStyle}>x</div>
        </div>
        <div style={circleStyle}>
          {prizes.map((prize, index) => (
            <div
              key={index}
              style={{
                ...sliceStyle,
                transform: `rotate(${(index * 360) / prizes.length}deg)`,
                backgroundColor: index % 2 === 0 ? "#FFD700" : "#E5C100", // Alternating gold shades
              }}
            >
              <div style={prizeTextStyle}>{prize}</div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={spinTheWheel} style={buttonStyle} disabled={isSpinning}>
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
      {raffleNumber && (
        <div style={raffleNumberStyle}>
          <h3>Raffle Ticket</h3>
          <p>Number: {raffleNumber}</p>
        </div>
      )}
    </div>
  );
};

// Styling
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#000", // Luxury cream-white background
  fontFamily: "'Playfair Display', serif", // Elegant serif font
};

const headerStyle = {
  fontSize: "3rem",
  color: "#FFD700", // Pure gold text
  textShadow: "2px 2px #B8860B", // Golden shadow
  marginBottom: "20px",
};

const circleContainerStyle = {
  position: "relative",
  width: "350px",
  height: "350px",
};

const circleStyle = {
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  position: "absolute",
  border: "8px solid #FFD700", // Gold border
  overflow: "hidden",
  boxShadow: "0 0 20px #FFD700", // Gold glow effect
};

const sliceStyle = {
  position: "absolute",
  width: "50%",
  height: "50%",
  transformOrigin: "100% 100%",
  borderTopLeftRadius: "100%",
  border: "1px solidrgb(252, 252, 252)", // Deep gold borders
};

const prizeTextStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) rotate(-90deg)",
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#000", // Black text for contrast
};

const starStyle = {
  position: "absolute",
  width: "350px",
  height: "350px",
  transformOrigin: "50% 50%",
  zIndex: 2,
};

const starInnerStyle = {
  position: "absolute",
  width: "30px",
  height: "30px",
  top: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "20px",
  color: "#000  ", // Gold star
};

const buttonStyle = {
  marginTop: "20px",
  padding: "15px 30px",
  fontSize: "18px",
  backgroundColor: "#FFD700", // Luxurious gold button
  color: "#000", // Black text for contrast
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0 0 15px #FFD700", // Gold glow
  textTransform: "uppercase",
  fontWeight: "bold",
};

const raffleNumberStyle = {
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#FFF", // White background
  color: "#000", // Black text
  borderRadius: "15px",
  boxShadow: "0 0 15px #FFD700", // Gold glow
  textAlign: "center",
  fontFamily: "'Playfair Display', serif", // Matching font
};

export default SpinWheel;
