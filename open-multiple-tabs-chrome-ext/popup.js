let onlyButton = document.getElementById('onlyButton');
let urls = [
  {
    "url": "https://www.chase.com/",
    "type": "login",
    "username": "username",
    "password": "password"
  },
  {
    "url": "https://www.pnc.com/en/personal-banking.htm",
    "type": "login",
    "username": "username",
    "password": "password"
  },
  {
    "url": "https://www.wellsfargo.com/",
    "type": "login",
    "username": "username",
    "password": "password"
  }
]

document.addEventListener("DOMContentLoaded", function(event) {
  onlyButton.addEventListener('click',
  openURL(urls));
})

function loginURL(url) {
  username = url.username;
  password = url.password;

  chrome.tabs.create({url: url.url});
}

function openURL(urls) {
  urls.map(url => {
    if (url.type === "login") {
      loginURL(url);
    } else {
      chrome.tabs.create({url: url.url})
    }
  });
}
