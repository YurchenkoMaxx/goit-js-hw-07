


const bodycolor = document.querySelector('.button');

bodycolor.addEventListener('click', handleColorChange);

function handleColorChange() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
    



  

