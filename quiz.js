function submitQuiz() {
      let score = 0;
      let totalQuestions = 10;

      // Pertanyaan 1
      const answer1 = document.querySelector('input[name="q1"]:checked');
      if (answer1 && answer1.value === "A") {
          score++;
      }

      // Pertanyaan 2
      const answer2 = document.querySelector('input[name="q2"]:checked');
      if (answer2 && answer2.value === "A") {
          score++;
      }
      //Pertanyaan 3
      const answer3 = document.querySelector('input[name="q3"]:checked');
      if (answer3 && answer3.value === "B") {
          score++;
      }
      // Pertanyaan 4
      const answer4 = document.querySelector('input[name="q4]:checked');
      if (answer4 && answer4.value === "A") {
          score++;
      }
      // Pertanyaan 5
      const answer5 = document.querySelector('input[name="q5"]:checked');
      if (answer5 && answer5.value === "B") {
          score++;
      }
      // Pertanyaan 6
      const answer6 = document.querySelector('input[name="q6"]:checked');
      if (answer6 && answer6.value === "D") {
          score++;
      }
      // Pertanyaan 7
      const answer7 = document.querySelector('input[name="q7"]:checked');
      if (answer7 && answer7.value === "A") {
          score++;
      }
      // Pertanyaan 8
      const answer8 = document.querySelector('input[name="q8"]:checked');
      if (answer8 && answer8.value === "A") {
          score++;
      }
      // Pertanyaan 9
      const answer9 = document.querySelector('input[name="q9"]:checked');
      if (answer9 && answer9.value === "A") {
          score++;
      }
      // Pertanyaan 10
      const answer10 = document.querySelector('input[name="q10"]:checked');
      if (answer10 && answer10.value === "B") {
          score++;
      }

      // Membuat peringatan jika user belum memilih semua pertanyaan
      if (score === 0) {
          alert("Anda belum memilih semua pertanyaan.");
          return;
      }

      // Membuat peringatan jika user mengerjakan quiz lebih dari 50%
      if (score < totalQuestions / 10) {
          alert("Anda mengerjakan quiz kurang dari 50%.");
      } else {
          alert("Selamat, Anda mengerjakan quiz dengan sukses.");
      }
      if (!checkQuizCompletion()) {
        alert("Harap jawab semua pertanyaan sebelum mengirim!");
        return;
    }
    alert("Kuis berhasil dikirim!");
      }
      // Menghapus semua pilihan user
      const inputs = document.querySelectorAll('input[type="radio"]');
      inputs.forEach(input => input.checked = false);

      // Menampilkan hasil
      const resultDiv = document.getElementById('result');
      resultDiv.textContent = `Skor kamu: ${score} dari ${totalQuestions}`;
  
