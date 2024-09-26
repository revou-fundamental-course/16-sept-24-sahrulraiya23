var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex+= n); 
}

function showDivs(n) {
    var i=0
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1; 
    else if (n < 1) slideIndex = imgList.length; 

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"; 
    }
    imgList[slideIndex - 1].style.display = "block"; 
}

setInterval(function() {
    plusDivs(1); 
}, 1000); 


    document.getElementById('myForm').addEventListener('submit', function (event) {
        // Validasi nama
        var name = document.getElementById('name').value;
        if (name.length < 3) {
            alert('Nama harus lebih dari 2 karakter');
            event.preventDefault();  // Mencegah submit jika validasi gagal
        }

        // Validasi Tanggal Lahir (dob)
        var dob = document.getElementById('dob').value;
        var dobDate = new Date(dob);
        var today = new Date();
        if (dobDate >= today) {
            alert('Tanggal Lahir harus sebelum hari ini');
            event.preventDefault();
        }

        // Validasi Pesan
        var message = document.getElementById('message').value;
        if (message.length < 1) {
            alert('Pesan harus lebih dari 1 karakter');
            event.preventDefault();
        }

       
    });
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form mengirim ke server

    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var message = document.getElementById('message').value;

    var resultText = "Nama: " + name + "\nTanggal Lahir: " + dob + "\nJenis Kelamin: " + gender + "\nPesan: " + message;

    document.getElementById('largeMessage').value = resultText;
    document.getElementById('Welcome').textContent = "Hallo " + name + ", Welcome To My Website";
});

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the active class
    });

