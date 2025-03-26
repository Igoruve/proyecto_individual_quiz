class Card {
  constructor(category, question) {
    (this.category = category), (this.question = question);
  }

  render() {
    const cardElement = document.createElement("section");
    cardElement.classList.add("card");
    cardElement.setAttribute("category-id", this.category);
    cardElement.innerHTML = `
      <h3>${this.question}</h3>
    `;
    return cardElement;
  }
}

class Answer {
  constructor(correctAnswer, incorrectAnswer) {
    (this.correctAnswer = correctAnswer),
      (this.incorrectAnswer = incorrectAnswer);
  }
  render() {
    const answerElement = document.createElement("article");
    answerElement.classList.add("answer");
    answerElement.setAttribute("answer-id");
    answerElement.innerHTML = ``;
    return;
  }
}
