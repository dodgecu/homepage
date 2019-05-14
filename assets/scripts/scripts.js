const date = new Date().getFullYear();
document.querySelector('.footer__copyright--date').innerHTML = date;

document.querySelector('.sidebar').addEventListener('click', renderColors);

let globalColor = null;

const pageBorder = document.querySelector('.page');

function renderColors(e) {
  if (e.target.classList.contains('gold')) {
    pageBorder.style.borderColor = '#f0e68c';
    globalColor = '#f0e68c';
  }
  if (e.target.classList.contains('black')) {
    pageBorder.style.borderColor = '#000';
    globalColor = '#000';
  }
}

document.querySelector('body').addEventListener('click', showTooltip);
const tooltipBox = document.createElement('div');
tooltipBox.className = 'hash-tooltip';

function showTooltip(e) {
  e.preventDefault();
  const current = e.target;
  globalColor !== null
    ? (tooltipBox.style.backgroundColor = globalColor)
    : (tooltipBox.style.backgroundColor = 'midnightblue');
  tooltipBox.innerHTML = current.textContent;
  if (current.className === 'label') {
    if (current.childNodes.length === 1) {
      current.appendChild(tooltipBox);
    } else {
      current.removeChild(tooltipBox);
    }
  } else {
    tooltipBox.remove();
  }
}
