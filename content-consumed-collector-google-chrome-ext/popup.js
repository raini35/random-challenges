console.log("popup running...")
let title_input = document.getElementById('content_title')
let url_input = document.getElementById('content_url')

chrome.runtime.getBackgroundPage(function(bg) {
    console.log(bg.word);
    title_input.value = bg.title;
    url_input.value = bg.url;
});
