const refs = {
  themeSwitcherEl: document.querySelector('.switch-checkbox'),
  bodyEl: document.querySelector('body'),
  searchFormEl: document.querySelector('.search-field'),
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

refs.themeSwitcherEl.addEventListener('change', onChange);

function onChange() {
  refs.bodyEl.classList.toggle('dark-mode');
  refs.logoEl.classList.toggle('light-text');
  refs.headerLinksEl.forEach(linkEl => linkEl.classList.toggle('light-text'));
  refs.headerInputEl.classList.toggle('header-input--dark');
  refs.searchFormEl.classList.toggle('header-form--dark');
  localStorage.setItem(
    themeKey,
    refs.bodyEl.classList.contains('dark-mode') ? 'dark' : 'light'
  );
}

const savedTheme = localStorage.getItem(themeKey);

function setDarkTheme() {
  if (savedTheme === 'dark') {
    refs.themeSwitcherEl.checked = true;
    refs.bodyEl.classList.add('dark-mode');
    refs.logoEl.classList.add('light-text');
    refs.headerLinksEl.forEach(linkEl => linkEl.classList.add('light-text'));
    refs.headerInputEl.classList.add('header-input--dark');
    refs.searchFormEl.classList.add('header-form--dark');
  }
}

setDarkTheme();

// Mobile-menu


const refsMenu = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close-mob]'),
  menu: document.querySelector('[data-menu]'),

};

console.log(refsMenu)

refsMenu.openMenuBtn.addEventListener('click', toggleMenu);
refsMenu.closeMenuBtn.addEventListener('click', toggleMenu);
// refsMenu.menuList.addEventListener('click', removeMenu);

function toggleMenu() {
  refsMenu.menu.classList.toggle('is-hidden');
  // refsMenu.body.classList.toggle('no-scroll');
}
toggleMenu()

function removeMenu() {
  refsMenu.menu.classList.add('is-hidden');
  // refsMenu.body.classList.remove('no-scroll');
}

 removeMenu()