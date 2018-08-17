console.log("content.js");
window.addEventListener('mouseup', mousedUpped);

function mousedUpped() {
  let selectedText = window.getSelection().toString();
  let url = window.location.href;
  console.log(selectedText);
  if (selectedText.length > 0) {
    let message = {
      title: selectedText,
      url
    }
    chrome.runtime.sendMessage(message);
  }
}
