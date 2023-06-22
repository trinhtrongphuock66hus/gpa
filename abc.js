const signInButton = document.querySelector(".signIn button");
signInButton.addEventListener("click", function() {
    let tinchi = document.getElementById('Tinchi').value;
    let diemcu = document.getElementById('Diemcu').value;
    let diemmoi = document.getElementById('Diemmoi').value;
    let tctl = document.getElementById('Tctl').value;
    let gpa = document.getElementById('Gpa').value;

    tinchi = parseFloat(tinchi.replace(',', '.')) || 0;
    diemcu = parseFloat(diemcu.replace(',', '.')) || 0;
    diemmoi = parseFloat(diemmoi.replace(',', '.')) || 0;
    tctl = parseFloat(tctl.replace(',', '.')) || 0;
    gpa = parseFloat(gpa.replace(',', '.')) || 0;

    let result = (diemmoi - diemcu) * tinchi / tctl + gpa;
    let tang = (diemmoi - diemcu) * tinchi / tctl ;
    alert("Gpa mới là: " + result +" Gpa tăng lên là: " +tang);
});
