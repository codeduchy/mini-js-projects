const apiKey ="Yf0_NX90uJSz0_c7c45cwh5jPHIIkvCuHalcfm-jxbs";

const formEl = document.querySelector("form");
const inputEl = document.querySelector("#search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreButtonEl = document.querySelector("#show-more-button");

let inputData = "";
let page = 0;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
})

async function searchImages() {
  page++;
  if(page > 0 && page < 1001) {
    showMoreButtonEl.style.display = "block";
  }
  inputData = inputEl.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  results.map(r => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src= r.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href= r.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = r.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResultsEl.appendChild(imageWrapper);
  })
}

showMoreButtonEl.addEventListener("click", (e) => {
  searchImages();
})