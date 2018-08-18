console.log("popup running...")
let title_input = document.getElementById('content_title')
let url_input = document.getElementById('content_url')
let article_type = document.getElementById('article_type')
let video_type = document.getElementById('video_type')

function onClick(type) {
  chrome.runtime.getBackgroundPage(function(bg) {
    bg.type = type;
    console.log("Type: " + bg.type); 
  });
}

function loadData() {
  chrome.runtime.getBackgroundPage(function(bg) {
      console.log(bg.title);
      console.log(bg.type);
      console.log(bg.url);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  let submit_button = document.getElementById('submit_button');
  submit_button.addEventListener('click', loadData);

  article_type.addEventListener('click', function() { onClick('article');});
  video_type.addEventListener('click', function() { onClick('video'); });
});

chrome.runtime.getBackgroundPage(function(bg) {
    title_input.value = bg.title;
    url_input.value = bg.url;
});
