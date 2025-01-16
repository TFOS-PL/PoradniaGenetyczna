// Obsługuje logowanie na podstawie kodu licencji
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const licenseCode = document.getElementById("licenseCode").value;
    const correctCode = "TF-HgrT83rkH4tglG"; // Kod licencji
    const loginError = document.getElementById("loginError");
    const loginSection = document.getElementById("loginSection");
    const assessmentSection = document.getElementById("assessmentSection");

    if (licenseCode === correctCode) {
        // Jeśli kod licencji jest poprawny, przejdź do oceny ryzyka
        loginSection.style.display = "none";
        assessmentSection.style.display = "block";
        loginError.style.display = "none";
    } else {
        // Jeśli kod jest niepoprawny, wyświetl komunikat o błędzie
        loginError.style.display = "block";
    }
});
