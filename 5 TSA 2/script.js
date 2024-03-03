function showBox(day) {
  const colorBox = document.getElementById('colorBox');
  const selectedButton = document.getElementById(day);

 
  const buttonColor = window.getComputedStyle(selectedButton).backgroundColor;

  
  colorBox.style.backgroundColor = buttonColor;

  
  setTimeout(() => {
    colorBox.style.backgroundColor = '#3498db'; 
  }, 500);
}
