<!-- script.js -->
const SHARED_URL = "https://open.spotify.com/playlist/5xnZNclTNr6mwLpzTuIZ2C?si=4cf3622e96ae4016&pt=277f8cb4a402ccdb1983325de3261541";

document.querySelectorAll(".shared-link").forEach(el => {
  el.href = SHARED_URL;
});