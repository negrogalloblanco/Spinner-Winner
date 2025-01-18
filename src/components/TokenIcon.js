import React from "react";

const TokenIcon = ({ value }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
      <circle cx="50" cy="50" r="48" fill="#FFC107" stroke="#FFA000" strokeWidth="2" />
      <text x="50" y="40" fontFamily="Arial, sans-serif" fontSize="14" fill="#000" fontWeight="bold" textAnchor="middle">
        {value}
      </text>
      <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="12" fill="#000" textAnchor="middle">
        Tokens
      </text>
    </svg>
  );
};

export default TokenIcon;
