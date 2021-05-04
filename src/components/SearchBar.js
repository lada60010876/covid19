import React from 'react';

const SearchBar = ({ input, onChange }) => {
  const BarStyling = {
    backgroundColor:"white",
    noRepeat: "true",
    width: "calc(100% - 40px)",
    border: "none",
    padding: "0.5rem"
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={input}
      placeholder={"Search"}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar