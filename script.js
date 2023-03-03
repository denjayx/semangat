const hiddenContent = document.querySelector(".content");
const button = document.getElementById("button");

function welcome() {
  alert("Tekan Oke Jika Harimu Kurang Berwarna");
  hiddenContent.removeAttribute("hidden");
}
function giveUp() {
  const text = document.getElementById("text");
  text.innerText = "Semangat!✌️";
  const image = document.createElement('img');
  image.setAttribute('src', 'semangat.jpg');
  image.setAttribute('width', '200');
  const h4 = document.createElement("h4");
  h4.innerText = "Lama Nggak Ngobrol Nih 🐊";
  hiddenContent.appendChild(image);
  hiddenContent.appendChild(h4);
}

button.addEventListener('click',()=>{
    button.style.display = 'none';
})

document.body.onload = welcome;
button.onclick = giveUp;
