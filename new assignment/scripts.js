function checkAge() {
    var ageInput = document.getElementById('ageInput').value;
    var ageResult = document.getElementById('ageResult');

    if (ageInput >= 18) {
        ageResult.innerHTML = "You are an adult.";
    } else if (ageInput > 0 && ageInput < 18) {
        ageResult.innerHTML = "You are a child.";
    } else {
        ageResult.innerHTML = "Please enter a valid age.";
    }
}
