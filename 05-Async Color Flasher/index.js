
function randomColor() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId = null;

function startChangingColor() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
}


function stopChangingColor() {
  clearInterval(intervalId);
  intervalId = null;
}

document.getElementById("start").addEventListener("click", startChangingColor);
document.getElementById("stop").addEventListener("click", stopChangingColor);
