document.getElementById("onlyButton").addEventListener("click", function() {

  chrome.runtime.sendMessage({
    type: "openTab"
  }, function(response) {
    console.log("Sent request...");
  });

});
