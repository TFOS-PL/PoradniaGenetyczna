document.getElementById("submitQuiz").addEventListener("click", function () {
    const questions = document.querySelectorAll(".question");
    let score = 0;

    questions.forEach((q, index) => {
        const answer = q.querySelector("input[type='radio']:checked");
        if (answer && answer.value === "yes") {
            score += 1;
        }
    });

    const progressBar = document.querySelector(".progress-bar");
    const resultText = document.getElementById("resultText");
    const adviceSection = document.getElementById("advice");
    const adviceText = document.getElementById("adviceText");

    const percentage = (score / questions.length) * 100;
    progressBar.style.width = `${percentage}%`;

    if (percentage > 70) {
        resultText.textContent = "Twoje ryzyko jest wysokie.";
        adviceText.textContent = "Skonsultuj się z lekarzem w celu szczegółowej diagnostyki.";
    } else if (percentage > 40) {
        resultText.textContent = "Twoje ryzyko jest umiarkowane.";
        adviceText.textContent = "Zalecamy regularne badania kontrolne.";
    } else {
        resultText.textContent = "Twoje ryzyko jest niskie.";
        adviceText.textContent = "Kontynuuj zdrowy tryb życia i profilaktykę.";
    }

    adviceSection.style.display = "block";
});
