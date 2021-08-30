const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//
const changeBox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
//
//
//
const currentTheme = localStorage.getItem('theme');

body.classList.add(currentTheme);

if (body.classList.contains('dark-theme')) {
    changeBox.setAttribute('checked', true);
};

changeBox.addEventListener('change', onChangeTheme);
// onChangeTheme();

function onChangeTheme() {

    if (body.classList.contains(Theme.LIGHT)) {
        changeBodyClass(Theme.LIGHT, Theme.DARK);

        localStorage.setItem('theme', Theme.DARK);        
    } else {
        changeBodyClass(Theme.DARK, Theme.LIGHT);

        localStorage.setItem('theme', Theme.LIGHT);
    };
}

const changeBodyClass = (cur, next) => {
    body.classList.remove(cur);
    body.classList.add(next);
 };