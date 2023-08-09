
const apiKey = "826ec5e8cccd4ce38a864c735645cebb";
const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-08-08&to=2023-08-08&sortBy=popularity&language=pt&apiKey=${apiKey}`;

function displayArticles(articles) {
  const articleListSection = document.getElementById("article-list");
  const articleTemplate = document.getElementById("article-template");

  articles.forEach((article) => {
    const articleClone = document.importNode(articleTemplate.content, true);

    const titleElement = articleClone.querySelector(".article-title");
    titleElement.textContent = article.title;

    const authorElement = articleClone.querySelector(".article-author");
    authorElement.textContent = article.author;

    const descriptionElement = articleClone.querySelector(
      ".article-description"
    );
    descriptionElement.textContent = article.description;

    articleListSection.appendChild(articleClone);
  });
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === "ok") {
      const articles = data.articles;
      displayArticles(articles);
    } else {
      console.log("Erro na requisição:", data.message);
    }
  })
  .catch((error) => {
    console.error("Erro:", error);
  });
