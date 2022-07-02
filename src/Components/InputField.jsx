import React from "react";

const InputField = ({ link, setLink, handleClick, validLink }) => {
  return (
    <div className="input-holder df ai-c jc-c">
      <div className="input">
        <input
          className={`${!validLink && "err-input"}`}
          type="text"
          name="address"
          placeholder="Shorten a link here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        {!validLink && <p className="err">Please add a link</p>}
      </div>
      <button className="squared big" onClick={handleClick}>
        Shorten It!
      </button>
    </div>
  );
};

export default InputField;
