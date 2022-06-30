import axios from "axios";

const PUBLIC_URL = "https://api.shrtco.de/v2/shorten";
export const getShortLink = async (link) => {
  const result = await axios
    .get(`${PUBLIC_URL}?url=${link}`, {
      headers: { accept: "Application/json" },
    })
    .then((res) => res.data.result.full_short_link)
    .catch((error) => console.log(error));

  return result;
};
