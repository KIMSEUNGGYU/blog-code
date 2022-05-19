const $header = document.querySelector('header');
const $main = document.querySelector('main');

$header.innerHTML = `
  <header>
    <nav>
      <li><a href="/">HOME</a></li>
      <li><a href="/about">ABOUT</a></li>
      <li><a href="/counter">COUNTER</a></li>
    </nav>
  </header>
`;

$header.addEventListener('click', (event) => {
  if (event.target.tagName !== 'A') {
    return;
  }

  const $href = event.target.href.split('/');

  const path = $href[$href.length - 1];

  if (path !== 'counter') {
    event.preventDefault();
  }

  if (path === '') {
    $main.innerHTML = `
      <h1>HOME</h1>
      <img src="./assets/milk.jpg" alt="milk" />
    `;
  } else if (path === 'about') {
    $main.innerHTML = `
      <h1>ABOUT</h1>
      <img src="./assets/olaf.jpg" alt="crayon" />
    `;
  }
});
