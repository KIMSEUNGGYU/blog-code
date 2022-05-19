const $header = document.querySelector('header');
const $counter = document.querySelector('.counter');
const $number = document.querySelector('#couterNumber');

let number = 0;

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

  if (path === 'counter') {
    event.preventDefault();
    return;
  }

  if (path === 'about') {
    event.preventDefault();
  }

  window.location = '/';
});

$counter.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') {
    return;
  }

  if (target.textContent === '+1') {
    number += 1;
  } else if (target.textContent === '-1') {
    number -= 1;
  }

  $number.textContent = number;
});
