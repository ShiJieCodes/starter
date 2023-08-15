const url = "https://icanhazdadjoke.com/";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  fetchData();
});

const fetchData = async () => {
  result.textContent = "loading..."; //can give loading first cause not promise will just load
  try {
    const resp = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });
    if (!resp.ok) {
      throw new Error("there was an error");
    }
    // console.log(resp); response object
    const data = await resp.json();
    // console.log(data); data object
    result.textContent = data.joke;
  } catch (err) {
    result.textContent = "There was an error..";
  }
};

fetchData();
