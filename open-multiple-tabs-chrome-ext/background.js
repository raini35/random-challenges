chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type == "openTab") {
    // chrome.tabs.create({
    //   "url": "http://www.google.com",
    //   "selected": true
    // }, function(tab) {
    // });
    console.log("OPEN TAB")
  }
});

let urls = [{
    "url": "https://www.chase.com/",
    "type": "login",
    "username": "username",
    "password": "password"
  },
  {
    "url": "https://www.pnc.com/",
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

function loginURL(url) {
  username = url.username;
  password = url.password;
  chrome.tabs.create({
    url: url.url
  });
}

function openURL(urls) {
  urls.map(url => {
    if (url.type === "login") {
      loginURL(url);
    } else {
      chrome.tabs.create({
        url: url.url
      })
    }
  });
}
