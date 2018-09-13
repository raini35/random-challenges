document.getElementById("onlyButton").addEventListener("click", function() {
  chrome.runtime.sendMessage({
    type: "openTab"
  }, function(response) {
    console.log("Sent request...");
  });

});

// Can't seem to access Chase DOM
