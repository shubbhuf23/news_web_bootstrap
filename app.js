// Fetching the DOM
const newsContainer = document.querySelector(".news-container");
const newsURL =
  "https://newsapi.org/v2/top-headlines?apiKey=19e2f5ba2c6c467da35f4504573232ab&language=en";

fetch(newsURL)
  .then((response) => response.json())
  .then((data) => getNewsData(data));

function getNewsData(data) {
  const articles = data.articles;
  articles.forEach((element) => {
    const title = element["title"];
    const content = element["content"];
    const url = element["url"];
    const urlToImg = element["urlToImage"];
    const author = element["author"];

    displayToDOM(title, content, url, urlToImg, author);
  });
}

function displayToDOM(title, content, source, imgSource, author) {
  const newsHTML = `
    <div class="col">
      <div class="card h-100">
          <img src="${imgSource}"
              class="card-img-top" alt="${imgSource}">
          <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${content}</p>
              
          </div>
          <div class="card-footer">
              <small class="text-muted"><b>Author: </b>${author}</small>
              <a href="${source}" class="btn btn-outline-primary btn-sm position-absolute bottom-0 end-0 mx-2 my-1" target="_blank">View More</a>
          </div>
      </div>    
    </div>
  `;

  newsContainer.innerHTML += newsHTML;
}
