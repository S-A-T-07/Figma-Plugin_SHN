let wheel = document.getElementById('wheel');

function spinWheel() {
  let randomDegree = Math.floor(Math.random() * 3600) + 720;
  wheel.style.transition = 'transform 3s ease';
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  setTimeout(showResult, 3000);
}

function showResult() {
  let currentRotation = getComputedStyle(wheel).transform;
  let angle = getAngleFromMatrix(currentRotation);
  let section = Math.floor(angle / 60);
  
  let result;
  switch (section) {
    case 0:
      result = 'Red Section';
      break;
    case 1:
      result = 'Green Section';
      break;
    case 2:
      result = 'Blue Section';
      break;
    case 3:
      result = 'Yellow Section';
      break;
    case 4:
      result = 'Magenta Section';
      break;
    case 5:
      result = 'Cyan Section';
      break;
  }

  alert(`You won: ${result}`);
}

function getAngleFromMatrix(matrixString) {
  let values = matrixString.split('(')[1].split(')')[0].split(',');
  let a = values[0];
  let b = values[1];
  let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  return angle < 0 ? angle + 360 : angle;
}
