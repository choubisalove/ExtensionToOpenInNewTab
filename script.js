
document.getElementById("button").onclick = function() {myFunction()};
    function myFunction(){
    var input = document.getElementById("searchInput").value;
      chrome.tabs.create({
        url: `https://www.google.com/search?q=${input}`
      });
    }