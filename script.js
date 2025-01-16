document.addEventListener("DOMContentLoaded", () => {
    function validateCode() {
        const inputCode = document.getElementById("accessCode").value;
        const validCode = "TF1412145373784"; // Hasło przechowywane w pliku JS

        if (inputCode === validCode) {
            document.getElementById("quizSection").style.display = "block";
            document.getElementById("accessCodeSection").style.display = "none";
        } else {
            alert("Nieprawidłowy kod dostępu. Proszę spróbować ponownie.");
        }
    }

    function submitProQuiz() {
        document.getElementById("proResult").innerHTML = "Wynik diagnozy i zalecenia zostaną wygenerowane po analizie.";
    }

    // Przypisanie funkcji do globalnego obiektu window, aby były dostępne z HTML
    window.validateCode = validateCode;
    window.submitProQuiz = submitProQuiz;
});