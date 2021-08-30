import menuData from '../menu.json';
import makeMenuMarkup from '../templates/menu-temp.hbs';

const menuRef = document.querySelector('.js-menu');

menuRef.innerHTML = makeMenuMarkup(menuData);