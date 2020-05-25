let list = new Array();
let pageList = new Array();
let currentPage = 1;
let numberPerPage = 4;
let numberOfPages = 0;

function getNumberOfPages(list) {
  numberOfPages = Math.ceil(list.length / numberPerPage);
};

function nextPage() {
  currentPage += 1;
  loadList();
}

function previousPage() {
  currentPage -= 1;
  loadList();
}

function firstPage() {
  currentPage = 1;
  loadList();
}

function lastPage() {
  currentPage = numberOfPages;
  loadList();
}

function loadList() {
  var begin = ((currentPage - 1) * numberPerPage);
  var end = begin + numberPerPage;

  pageList = list.slice(begin, end);
  drawList();
  check();
}

function drawList() {

  let html = "<div class='placeholderImgContainer'>";
    $.each(pageList, function (key, value) {
      html += `<div class='placeholderImg'><img onclick='handleImgClick(${JSON.stringify(value)})' src=${value.placeholderImg} /></div>`;
    });
    html += "</div>";
    $('.post-container').html(html);
}

function check() {
  document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
  document.getElementById("previous").disabled = currentPage == 1 ? true : false;
  document.getElementById("first").disabled = currentPage == 1 ? true : false;
  document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function loadJSON(callback) {

  let xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './src/projects.json', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

let handleImgClick = function(data) {
console.log(data);
};

$(document).ready(function () {
  loadJSON(function (response) {
    let data = JSON.parse(response);
    list = data.projects;
    getNumberOfPages(data.projects);
    loadList();
  });
});


