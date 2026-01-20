function corriger() {
    let score = 0;

    let rep1 = document.querySelector('input[name="q1"]:checked');
    let rep2 = document.querySelector('input[name="q2"]:checked');
    let rep3 = document.querySelector('input[name="q3"]:checked');
    let rep4 = document.querySelector('input[name="q4"]:checked');
    let rep5 = document.querySelector('input[name="q5"]:checked');

    if (rep1 && rep1.value === "a") score++;
    if (rep2 && rep2.value === "b") score++;
    if (rep3 && rep3.value === "a") score++;
    if (rep4 && rep4.value === "b") score++;
    if (rep5 && rep5.value === "b") score++;

    let resultat = document.getElementById("resultat");
    resultat.innerHTML = "<h3>Votre score : " + score + "/5</h3>";
}
