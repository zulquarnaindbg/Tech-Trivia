function checkQuiz() {
    let score = 0;
    let total = 4;

    for (let i = 1; i <= total; i++) {
        let q = document.getElementsByName("q" + i);
        for (let option of q) {
            if (option.checked) {
                score += Number(option.value);
            }
        }
    }

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / " + total;
    document.getElementById("quizForm").addEventListener("reset", function () {
    document.getElementById("result").innerHTML = "";
});

}

