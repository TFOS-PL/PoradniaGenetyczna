function submitQuiz() {
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    
    if (!question1 || !question2 || !question3) {
        alert("Proszę odpowiedzieć na wszystkie pytania!");
        return;
    }

    let resultText = "Twoje wyniki:\n\n";
    let advice = "Porada:\n";

    if (question1.value === "yes" && question2.value === "yes") {
        resultText += "Wysokie ryzyko mutacji. Zaleca się skonsultowanie z lekarzem specjalistą.\n";
        advice += "Zaleca się wykonanie dalszych badań diagnostycznych.";
    } else if (question1.value === "no" && question2.value === "yes") {
        resultText += "Możliwe zmiany, ale ryzyko mutacji jest mniejsze. Warto udać się na wizytę kontrolną.\n";
        advice += "Zaleca się dalszą obserwację.";
    } else {
        resultText += "Ryzyko mutacji jest niskie, ale nadal należy monitorować swoje zdrowie.\n";
        advice += "Zaleca się regularne badania profilaktyczne.";
    }

    document.getElementById("result").innerHTML = `<pre>${resultText}${advice}</pre>`;
}
