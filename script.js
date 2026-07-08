<!-- script.js -->
const SHARED_URL = "https://open.spotify.com/playlist/5xnZNclTNr6mwLpzTuIZ2C?si=c565c8170234495a&pt=af2e28901ac1015971da5203cab4312a";

document.querySelectorAll(".shared-link").forEach(el => {
  el.href = SHARED_URL;
});