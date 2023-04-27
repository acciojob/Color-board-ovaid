//your JS code here. If required.
const container = document.querySelector('.container');

// Generate 800 squares dynamically
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = '#ccc';
  });
  square.addEventListener('mouseleave', () => {
    setTimeout(() => {
      square.style.backgroundColor = '#eee';
    }, 1000);
  });
  container.appendChild(square);
}
