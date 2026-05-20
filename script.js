<!-- script.js -->
const SHARED_URL = "https://open.spotify.com/playlist/5xnZNclTNr6mwLpzTuIZ2C?si=d97a67ca4e76454c&pt=99854290b6306df02602d75d72b8c863";

document.querySelectorAll(".shared-link").forEach(el => {
  el.href = SHARED_URL;
});