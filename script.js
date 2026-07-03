<!-- script.js -->
const SHARED_URL = "https://open.spotify.com/playlist/5xnZNclTNr6mwLpzTuIZ2C?si=8994bbe867da4ea7&pt=1b0f06a6e9d1b472a7020c0bf9769b5b";

document.querySelectorAll(".shared-link").forEach(el => {
  el.href = SHARED_URL;
});