let deferredPrompt;

const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// detect if app already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
  showHome();
}

installBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
  }
  showHome();
});

function showHome() {
  document.getElementById("installScreen").classList.remove("active");
  document.getElementById("homeScreen").classList.add("active");
}

function downloadManual(file) {
  window.open(file, "_blank");

}


if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}


