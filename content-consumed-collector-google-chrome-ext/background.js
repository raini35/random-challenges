console.log("background.js");

chrome.runtime.onMessage.addListener(receiver);

window.title = "";
window.url = "";

function receiver(request, sender, sendResponse) {
  console.log(request);
  window.title = request.title;
  window.url = request.url;
  console.log(title);
  console.log(url); 
}
