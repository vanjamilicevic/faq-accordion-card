

/*
    Function receives:
    itemNumber - Question number, [1, n]

    This function is executed when user clicks on a question.
    1. If paragraph is hidden, it will display it by adding additional class
    2. If paragraph is displayed, it will hide it by removing additional class
*/
function toggleAnswer(itemNumber) {

    // Fetching the concrete item from the HTML (question, arrow and answer)
    let questionTag = document.getElementsByClassName("question")[itemNumber - 1]
    let arrowTag = document.getElementsByClassName("arrow")[itemNumber - 1]
    let answerTag = document.getElementsByClassName("answer")[itemNumber - 1]

    // Displaying the answer if it was hidden
    let answerClasses = [... answerTag.classList]
    if (answerClasses.includes("answer-hidden")) {
        answerTag.classList.remove("answer-hidden")
        questionTag.classList.add("question-bold")
        arrowTag.classList.add("arrow-reversed")
        
    }
    // Hidding the answer if it was displayed
    else {
        answerTag.classList.add("answer-hidden")
        questionTag.classList.remove("question-bold")
        arrowTag.classList.remove("arrow-reversed")
    }

    // Closing all other displayed questions
    let answers = document.getElementsByClassName("answer")
    let questions = document.getElementsByClassName("question")
    let arrows = document.getElementsByClassName("arrow")
    for(let i = 0; i < answers.length; i++) {

        if(i === itemNumber - 1)
            continue

        let answerClasses = [... answers[i].classList]
        if (!answerClasses.includes("answer-hidden")) {
            answers[i].classList.add("answer-hidden")
            questions[i].classList.remove("question-bold")
            arrows[i].classList.remove("arrow-reversed")
        }
    }
}