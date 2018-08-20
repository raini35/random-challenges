console.log("popup running...")
let title_input = document.getElementById('content_title')
let url_input = document.getElementById('content_url')
let article_type = document.getElementById('article_type')
let video_type = document.getElementById('video_type')


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function onClick(type) {
  chrome.runtime.getBackgroundPage(function(bg) {
    bg.type = type;
    console.log("Type: " + bg.type);
  });
}

function loadData() {
  console.log("Loading data...")

  chrome.runtime.getBackgroundPage(function(bg) {
      old_items = {}
      time_info = new Date();
      key = time_info.getMonth() + '-' + time_info.getDate();
      let temporary = "";

      new_content = {
        "title": bg.title,
        "type": bg.type,
        "url": bg.url,
        "time_accessed": time_info
      };

      console.log(new_content["time_accessed"]);
      if(isEmpty(old_items)) {
        chrome.storage.sync.set({key: [new_content]}, function(result) {
          console.log(result);
        });
      } else {
        chrome.storage.sync.set({key: [...old_items, new_content]}, function(result) {
          console.log(result);
        });
      }

      // chrome.storage.sync.get("5", function(result) {
      //   temporary = result;
      //   console.log(temporary);
      // })
      // chrome.storage.sync.set({"5": new_content}, function() { console.log(new_content)});
    });



    // chrome.storage.sync.get("5", function(result) {
    //   console.log("Current value:");
    //   console.log(result);
    // })
  // chrome.runtime.getBackgroundPage(function(bg) {
      // old_items = []
      // time_info = new Date();
      // key = time_info.getMonth() + '-' + time_info.getDate();
      //
      // new_content = {
      //   "title": bg.title,
      //   "type": bg.type,
      //   "url": bg.url,
      //   "time_accessed": time_info
      // };
      //
      // chrome.storage.sync.get("7-8", function(result) {
      //   old_items = result;
      // });
      //
      //
      // if(old_items.length === 0) {
      //   console.log('It is empty');
      //   chrome.storage.sync.set({"7-8": "hello"}, function() {
      //     chrome.storage.sync.get("7-8", function(result) {
      //       console.log(result);
      //     });
      //   });
      // } else {
      //   console.log("There are things here");
      // }

      // chrome.storage.sync.set({ "yourBody": "myBody" }, function(){
      //     console.log("myBody placed");
      // });
      //
      // chrome.storage.sync.get(/* String or Array */["yourBody"], function(items){
      //     //  items = [ { "yourBody": "myBody" } ]
      //     console.log(items);
      // });

      // chrome.storage.sync.get([key], function(result) {
      //   console.log("Current: " + result);
      // });
      // else {
      //
      // }

      //
      //
      //
      // chrome.storage.sync.set({"today": }, function() {
      //     console.log('Value is set to ' + bg.title);
      // });
  // });
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
