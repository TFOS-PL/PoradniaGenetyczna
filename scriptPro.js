function submitQuizPro() {
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');
    
    if (!question1 || !question2 || !question3) {
        alert("Proszę odpowiedzieć na wszystkie pytania!");
        return;
    }

    let resultText = "Wyniki diagnostyczne:\n\n";
    let advice = "Porada:\n";

    if (question1.value === "yes" && question2.value === "yes") {
        resultText += "Wysokie ryzyko genetyczne, należy przeprowadzić testy genetyczne.\n";
        advice += "Zaleca się kontynuowanie dalszych badań.";
    } else if (question1.value === "no" && question2.value === "yes") {
        resultText += "Pacjentka ma historię raka piersi, ryzyko może być średnie.\n";
        advice += "Zaleca się wykonanie mammografii.";
    } else {
        resultText += "Brak wyraźnych wskazań do dalszych badań.\n";
        advice += "Zaleca się regularne badania kontrolne.";
    }

    document.getElementById("resultPro").innerHTML = `<pre>${resultText}${advice}</pre>`;
}
