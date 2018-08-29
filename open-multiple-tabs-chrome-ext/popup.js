let onlyButton = document.getElementById('onlyButton');

document.addEventListener("DOMContentLoaded", function(event) {
  onlyButton.addEventListener('click',
  openURL(["https://www.chase.com/", "https://www.pnc.com/en/personal-banking.htm", "https://www.wellsfargo.com/"]));
})

function openURL(urls) {
  urls.map(url => {
    chrome.tabs.create({url: url})
  });
}
