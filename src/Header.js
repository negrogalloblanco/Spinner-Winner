import React from "react";
import "./Header.css"; // Add this file for specific header styles if needed

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                {/* Add your logo here */}
                <img 
                    src={require("./assets/spinnerwinner.png")} 
                    alt="Spinner Winner Logo" 
                    className="logo"
                />
            </div>
            <h1 className="header-title">Welcome to Spinner Winner</h1>
        </header>
    );
}

export default Header;
