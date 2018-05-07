const toggleList = document.getElementById('top');
const pdf = document.querySelector('iframe');
const button = document.querySelector('a.btn');

pdf.style.display = 'none';

button.addEventListener('click', () => {
  toggleList.style.display = 'none';
  pdf.style.display = 'block';
});
