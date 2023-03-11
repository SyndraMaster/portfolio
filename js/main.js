const container = document.querySelector('.particulas');
const banner = document.querySelector('.banner');
console.log(banner.offsetWidth)

for (let i = 0; i < 10; i++) {
  const box = document.createElement('div');
  box.classList.add('particula');
  
  // Establecer propiedades de posicionamiento aleatorias
  const randomX = Math.floor(Math.random() * banner.offsetWidth);
  const randomY = Math.floor(Math.random() * banner.offsetHeight);
  box.style.left = `${randomX}px`;
  box.style.bottom = randomY + banner.offsetHeight + 'px';
  container.appendChild(box);
}