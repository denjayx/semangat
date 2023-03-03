const Contents = document.querySelector(".content");
const button = document.getElementById("button");
const image = document.createElement("img");
const text = document.getElementById("text");
const h4 = document.createElement("h4");
const BreakLine = document.createElement("br");
const pantunBtn = document.createElement("button");
pantunBtn.className = "btnOk";
const callLink = document.createElement("a");
callLink.className = "btnOk";

function welcome() {
  alert("Tekan Ok Kalo Kamu Lagi Sedih");
  Contents.removeAttribute("hidden");
}
function giveUp() {
  text.innerText = "Semangat!✌️";
  image.setAttribute("src", "semangat.jpg");
  image.className = "imageSemangat";
  h4.innerHTML = `Bunga disiram takkan layu <br/> Selalu berbunga tanpa jemu <br/> Jangan takut kehilanganku <br/> Aku takkan pergi dari sisimu`;
  pantunBtn.innerText = "Masih Sedih Ya?😔, Klik Lagi Dong";
  Contents.appendChild(image);
  Contents.appendChild(h4);
  Contents.appendChild(pantunBtn);
}
function masihKurang() {
  text.innerText =
    "Mmm Kalo Pake Pantun Masih Kurang Semangat, Coba Langsung Call Aja Deh 👉👈";
  image.setAttribute("src", "kucing.jpg");
  image.className = "imageSemangat";
  pantunBtn.style.display = "none";
  callLink.setAttribute("href", "tapiboong.html");
  callLink.innerText = "Call Ajahh 🫰";
  Contents.appendChild(image);
  Contents.appendChild(BreakLine);
  Contents.appendChild(callLink);
  h4.style.display = "none";
}

button.addEventListener("click", () => {
  button.style.display = "none";
});

document.body.onload = welcome;
button.onclick = giveUp;
pantunBtn.onclick = masihKurang;
