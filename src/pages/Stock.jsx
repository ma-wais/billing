import React from "react";

const Stock = () => {
  return (
    <div className="inputs">
      <form className="item-form">
        <input
          type="text"
          placeholder="(F1) Search Item By Name / Code / Unit"
          className="search-input"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Stock;
