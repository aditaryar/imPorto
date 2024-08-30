const php = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg",
];

let currentIndex = 0;
const phpElement = document.getElementById("image-php");

function changeImagephp() {
  currentIndex = (currentIndex + 1) % php.length;
  phpElement.src = php[currentIndex];
}

setInterval(changeImagephp, 3500); // Ganti gambar setiap 5 detik



const css = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
];

let currentIndexz = 0;
const cssElement = document.getElementById("image-css");

function changeImagecss() {
  currentIndexz = (currentIndexz + 1) % css.length;
  cssElement.src = css[currentIndexz];
}

setInterval(changeImagecss, 3500); // Ganti gambar setiap 5 detik
          