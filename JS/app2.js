const toggleList = document.getElementById('top');
const pdf1 = document.getElementById('white-paper1');
const pdf2 = document.getElementById('white-paper2');
const pdf3 = document.getElementById('white-paper3');
const button1 = document.querySelector('button.one');
const button2 = document.querySelector('button.two');
const button3 = document.querySelector('button.three');

pdf1.style.display = 'none';
pdf2.style.display = 'none';
pdf3.style.display = 'none';

button1.addEventListener('click', () => {
  // toggleList.style.display = 'none';
  pdf1.style.display = 'block';
  pdf2.style.display = 'none';
  pdf3.style.display = 'none';
});

button2.addEventListener('click', () => {
  // toggleList.style.display = 'none';
  pdf2.style.display = 'block';
  pdf1.style.display = 'none';
  pdf3.style.display = 'none';
});

button3.addEventListener('click', () => {
  // toggleList.style.display = 'none';
  pdf3.style.display = 'block';
  pdf1.style.display = 'none';
  pdf2.style.display = 'none';
});
