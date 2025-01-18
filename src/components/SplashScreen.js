import React from "react";
import spinnerImage from "../assets/spinnerwinner.png";

const SplashScreen = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Spinner Winner</h1>
    <img src={spinnerImage} alt="Spinner" style={styles.image} />
  </div>
);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, gold, orange, blue)",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: "20px",
  },
  image: {
    width: "200px",
    animation: "spin 3s infinite linear",
  },
};

export default SplashScreen;
