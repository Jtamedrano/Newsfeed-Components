// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
import data from "./data";

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:
  <div class="article">
  <h2>{title of the article}</h2>
  <p class="date">{date of the article}</p>
  
  {three separate paragraph elements}
  
  <span class="expandButton">+</span>
  </div>
  
  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.
  
  Step 3: Don't forget to return something from your function!
  
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
  
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
  */

const articleMaker = (props) => {
  // Makes <div class="article"></div>
  const article = document.createElement("div");
  article.classList.add("article");

  // Makes <h2>{title of the article}</h2>
  const article_title = document.createElement("h2");
  article_title.textContent = props.title;

  // Makes <p class="date">{date of the article}</p>
  const article_date = document.createElement("p");
  article_date.textContent = props.date;

  // add elements to div.article
  article.appendChild(article_title);
  article.appendChild(article_date);

  // Makes three paragraphs
  props.paragraphs.forEach((e) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = e;
    article.appendChild(paragraph);
  });

  // Makes <span class="expandButton">+</span>
  let article_extend = document.createElement("span");
  article_extend.classList.add("expandButton");
  article_extend.textContent = "+";

  article.appendChild(article_extend);

  // expandButton Event Listener
  article_extend.addEventListener("click", (_) => {
    article.classList.toggle("article-open");
  });

  return article;
};

const articles = document.querySelector(".articles");

data.forEach((e) => {
  let testArticle = articleMaker({
    title: e.title,
    date: e.date,
    paragraphs: [e.firstParagraph, e.secondParagraph, e.thirdParagraph],
  });
  articles.appendChild(testArticle);
});
