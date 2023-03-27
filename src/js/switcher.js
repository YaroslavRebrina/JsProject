const refs = {
  themeSwitcherEl: document.querySelector('.switch-checkbox'),
  bodyEl: document.querySelector('body'),
  themeContainerEl: document.querySelector('.header__theme-select'),
  logoEl: document.querySelector('.header-nav__logo-link'),
  headerLinksEl: document.querySelectorAll('.header-nav__link'),
  headerInputEl: document.querySelector('.header-input'),
  headerInputIconEl: document.querySelector('.header-input__icon'),
  switcherLightEl: document.querySelector('.header-checkbox__icon-light'),
  switcherDarkEl: document.querySelector('.header-checkbox__icon-dark'),
  switchTextlightEl: document.querySelector('.header__theme-select-light--on'),
  switchTextDarktEl: document.querySelector('.header__theme-select-dark--off'),
};

const themeKey = 'theme';

// if(localStorage.getItem(themeKey) === 'dark'){
//     refs.themeSwitcherEl.cheсked = true
//     setDarkTheme()
// }

// console.dir(refs.headerInputEl);

refs.themeSwitcherEl.addEventListener('change', onChange);

function onChange() {
  refs.bodyEl.classList.toggle('dark-mode');
  refs.logoEl.classList.toggle('light-text');
  refs.headerLinksEl.forEach(linkEl => linkEl.classList.toggle('light-text'));
  refs.headerInputEl.classList.toggle('header-input--dark');

  localStorage.setItem(
    themeKey,
    refs.bodyEl.classList.contains('dark-mode') ? 'dark' : 'light'
  );
}

const savedTheme = localStorage.getItem(themeKey)

if (savedTheme === 'dark') {
    refs.themeSwitcherEl.checked = true;
    refs.bodyEl.classList.add('dark-mode');
    refs.logoEl.classList.add('light-text');
    refs.headerLinksEl.forEach(linkEl => linkEl.classList.add('light-text'));
    refs.headerInputEl.classList.add('header-input--dark');
  }

// function setDarkTheme() {
//   refs.bodyEl.classList.add('dark-mode');
//   refs.logoEl.classList.add('light-text');
//   refs.headerLinksEl.forEach(linkEl => linkEl.classList.add('light-text'));
//   refs.headerInputEl.add('header-input--dark')
// }

