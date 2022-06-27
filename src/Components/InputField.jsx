import React, { useState } from "react";

const LINK_REGEX =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
const InputField = () => {
  const [link, setLink] = useState("");
  const [validLink, setValidLink] = useState(true);
  const [linkInfo, setLinkInfo] = useState({});

  const handleClick = async () => {
    setValidLink(LINK_REGEX.test(link));
    if (!LINK_REGEX.test(link)) return;
    shortenLink();
  };

  const shortenLink = async () => {
    const shortLink = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    )
      .then((data) => data.json())
      .then((res) =>
        //  setLinkInfo(res)
        console.log(res)
      );
  };

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
