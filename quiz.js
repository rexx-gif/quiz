function submitQuiz() {
    let score = 0;
    let totalQuestions = 10;

    // Membuat peringatan jika ada pertanyaan yang belum dijawab
    let unanswered = false;

    // Pertanyaan 1
    const answer1 = document.querySelector('input[name="q1"]:checked');
    if (answer1) {
        if (answer1.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 2
    const answer2 = document.querySelector('input[name="q2"]:checked');
    if (answer2) {
        if (answer2.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 3
    const answer3 = document.querySelector('input[name="q3"]:checked');
    if (answer3) {
        if (answer3.value === "B") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 4
    const answer4 = document.querySelector('input[name="q4"]:checked');
    if (answer4) {
        if (answer4.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 5
    const answer5 = document.querySelector('input[name="q5"]:checked');
    if (answer5) {
        if (answer5.value === "B") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 6
    const answer6 = document.querySelector('input[name="q6"]:checked');
    if (answer6) {
        if (answer6.value === "D") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 7
    const answer7 = document.querySelector('input[name="q7"]:checked');
    if (answer7) {
        if (answer7.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 8
    const answer8 = document.querySelector('input[name="q8"]:checked');
    if (answer8) {
        if (answer8.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 9
    const answer9 = document.querySelector('input[name="q9"]:checked');
    if (answer9) {
        if (answer9.value === "A") score++;
    } else {
        unanswered = true;
    }

    // Pertanyaan 10
    const answer10 = document.querySelector('input[name="q10"]:checked');
    if (answer10) {
        if (answer10.value === "B") score++;
    } else {
        unanswered = true;
    }

    // Jika ada pertanyaan yang belum dijawab
    if (unanswered) {
        alert("Harap jawab semua pertanyaan sebelum mengirim!");
        return;
    }

    // Membuat peringatan jika user mengerjakan quiz lebih dari 50%
    if (score < totalQuestions / 2) {
        alert("Anda mengerjakan quiz kurang dari 50%.");
    } else {
        alert("Selamat, Anda mengerjakan quiz dengan sukses.");
    }

    // Menghapus semua pilihan user
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => input.checked = false);

    // Menampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Skor kamu: ${score} dari ${totalQuestions}`;
}
