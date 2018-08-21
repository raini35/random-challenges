console.log("popup running...")
let title_input = document.getElementById('content_title')
let url_input = document.getElementById('content_url')
let article_type = document.getElementById('article_type')
let video_type = document.getElementById('video_type')

document.addEventListener("DOMContentLoaded", function(event) {
  let submit_button = document.getElementById('submit_button');
  submit_button.addEventListener('click', submitData);

  article_type.addEventListener('click', function() {
    captureType('article');
  });

  video_type.addEventListener('click', function() {
    captureType('video');
  });
});

chrome.runtime.getBackgroundPage(function(bg) {
  title_input.value = bg.title;
  url_input.value = bg.url;
});

function isEmpty(obj) {
  if (obj === undefined || obj.length == 0) {
      return true;
  }
  return false;
}

function captureType(type) {
  chrome.runtime.getBackgroundPage(function(bg) {
    bg.type = type;
  });
}

function returnNewContent(bg, time_info) {
  return {
    "title": bg.title,
    "type": bg.type,
    "time_accessed": time_info
  };
};

function urlExists(url) {
  for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
}

function submitData() {
  console.log("Loading data...")
  let old_items;
  let time_info = new Date();
  let current_day = time_info.getMonth() + '-' + time_info.getDate();

  chrome.runtime.getBackgroundPage(function(bg) {
    console.log("Inside Background Page Callback");
    let new_item = returnNewContent(bg, time_info);
    let url = bg.url;

    chrome.storage.sync.get([current_day], function(result) {
      items = result[current_day];
      if(url in items) {
        console.log("Content already listed.");
      } else {
        items[url] = new_item;
        chrome.storage.sync.set({
          [current_day]: items
        }, function() {
          console.log("Added new item to: " + current_day);
        });
      }
    });
  });
}
