export const SPACEFLIGHTNEWSAPI_URL =
  "https://api.spaceflightnewsapi.net/v4/articles";

export const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

// function helpers
export const convertISOTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
