import React, { useMemo } from "react";

const InputField = ({ link, setLink, handleClick, validLink }) => {
  return (
    <div className="input-holder">
      <input
        className={`${!validLink && "err-input"}`}
        type="text"
        name="address"
        placeholder="Shorten a link here..."
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button className="squared big" onClick={handleClick}>
        Shorten It!
      </button>
      {!validLink && <p className="err">Please add a link</p>}
    </div>
  );
};

export default InputField;
