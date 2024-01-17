const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const formElement = event.target.elements;
  //   console.log(formElement.yourquestion.value);
  //   console.log(formElement.youranswer.value);
  //   console.log(formElement.tag.value);
  const formData = new FormData(event.target);
  const newCardData = Object.fromEntries(formData);
  console.log(newCardData); // dieser Abschnitt ist quasi Allround-Vorlage, um Daten abzugreifen/zu lesen

  const article = document.createElement("article");
  article.classList.add("card");

  const question = document.createElement("h2");
  question.classList.add("card__question");
  question.textContent = newCardData.yourQuestion;

  const button = document.createElement("button");
  button.classList.add("card__button-answer");
  button.textContent = "Show answer";

  const answer = document.createElement("p");
  //answer.classList.add("card__answer");
  answer.textContent = newCardData.yourAnswer;

  const tagList = document.createElement("ul");
  tagList.classList.add("card__tag-list");

  const tagListItem = document.createElement("li");
  tagListItem.classList.add("card__tag-list-item");
  tagListItem.textContent = `#${newCardData.tag}`;

  main.append(article);
  article.append(question, button, answer, tagList);
  tagList.append(tagListItem);
});
