console.log("background.js");

chrome.runtime.onMessage.addListener(receiver);

window.title = "";
window.url = "";
window.type = "";

function receiver(request, sender, sendResponse) {
  window.title = request.title;
  window.url = request.url;
}
