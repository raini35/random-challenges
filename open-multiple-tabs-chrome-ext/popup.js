let onlyButton = document.getElementById('onlyButton');
urls = [
  {
    "url": "https://www.chase.com/",
    "type": "login"
  },
  {
    "url": "https://www.pnc.com/en/personal-banking.htm",
    "type": "login"
  },
  {
    "url": "https://www.wellsfargo.com/",
    "type": "login"
  }
]

document.addEventListener("DOMContentLoaded", function(event) {
  onlyButton.addEventListener('click',
  openURL());
})

function openURL(urls) {
  urls.map(url => {
    chrome.tabs.create({url: url})
  });
}
