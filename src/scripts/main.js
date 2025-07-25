'use strict';

const tree = document.querySelector('.tree');
const listItems = tree.querySelectorAll('li');

// Оборачиваем текст каждого <li> в <span>
listItems.forEach(li => {
  const text = li.firstChild.textContent.trim();
  const span = document.createElement('span');
  span.textContent = text;

  li.firstChild.replaceWith(span);
});

// Вешаем обработчик
tree.addEventListener('click', e => {
  if (e.target.tagName !== 'SPAN') return;

  const li = e.target.closest('li');
  const ul = li.querySelector('ul');

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});