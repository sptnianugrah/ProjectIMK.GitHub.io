//box pencarian

document.getElementById('search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('search-input').value;
    alert('Anda mencari: ' + searchInput);
});

//gambar bergerak
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Auto play the slider, change slide every 3000 milliseconds (3 seconds)
    setInterval(nextSlide, 3000);

    // Show the initial slide
    showSlide(currentSlide);
});

//kalender
document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const currentMonthElement = document.getElementById("currentMonth");
    const calendarDaysElement = document.getElementById("calendarDays");
    const prevMonthElement = document.getElementById("prevMonth");
    const nextMonthElement = document.getElementById("nextMonth");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function updateCalendar() {
      currentMonthElement.textContent = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

      // Clear previous days
      calendarDaysElement.innerHTML = '';

      // Get the first day of the month
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

      // Get the last day of the month
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      // Create empty cells for days before the first day of the month
      for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("day");
        calendarDaysElement.appendChild(emptyCell);
      }

      // Create cells for each day in the month
      for (let i = 1; i <= lastDayOfMonth; i++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("day");
        dayCell.textContent = i;

        // Highlight today's date
        if (i === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          dayCell.classList.add("today");
        }

        // Add click event to each day
        dayCell.addEventListener("click", function () {
          alert(`You clicked on ${i}/${currentMonth + 1}/${currentYear}`);
        });

        calendarDaysElement.appendChild(dayCell);
      }
    }

    // Initial calendar rendering
    updateCalendar();

    // Event listener for navigating to the previous month
    prevMonthElement.addEventListener("click", function () {
      if (currentMonth > 0) {
        currentMonth--;
      } else {
        currentMonth = 11;
        currentYear--;
      }
      updateCalendar();
    });

    // Event listener for navigating to the next month
    nextMonthElement.addEventListener("click", function () {
      if (currentMonth < 11) {
        currentMonth++;
      } else {
        currentMonth = 0;
        currentYear++;
      }
      updateCalendar();
    });
  });

  //berita
  function searchFunction() {
    var searchTerm = document.getElementById("search-box").value;
    var resultContainer = document.getElementById("result-container");

    // Proses pencarian (contoh: menampilkan hasil di bawah kotak pencarian)
    resultContainer.innerHTML = "<p>Hasil pencarian untuk: " + searchTerm + "</p>";
}

//text fade
const fadeText = document.getElementById("fadeText");
const phrases = [
   "Simulasi Sosialisasi dan Pengenalan pelatihan teknis melalui drama Mini",
  "Evaluasi Rangkaian Kegiatan Aksi Perubahan",
  "Gelar Rapat Koordinasi Penyusunan draff Mekanisme SK",
  "Kecamatan Banjarnegara menyelenggarakan Sosialisasi SKP",
  "Kecamatan Banjarnegara bersama PGRI gelar jalan santai",
  "Media Digital Galeri Interaktif masyarakat mulai disiapkan"
  // Tambahkan kalimat lainnya sesuai kebutuhan
];
let currentPhraseIndex = 0;

function changeText() {
  fadeText.textContent = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  fadeText.classList.remove("fade-text");
  void fadeText.offsetWidth; // Trigger reflow
  fadeText.classList.add("fade-text");
}

setInterval(changeText, 5000); // Ganti setiap 5 detik (sesuaikan waktu sesuai keinginan)
changeText(); // Memanggil fungsi pertama kali