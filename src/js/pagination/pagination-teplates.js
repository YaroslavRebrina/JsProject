const pag = document.querySelector('.pagination');
const underfinedHide = document.querySelector('.underfined-hidden');
const underfined = document.querySelector('.underfined');

export function underfinedAdd() {
  return document
    .querySelector('.underfined')
    .classList.add('underfined-hidden');
}
export function pagDisplayVisisble() {
  return pag.classList.remove('pagination-hidden');
}
if (!underfined.classList.contains('underfined-hidden')) {
  underfined.classList.add('underfined-hidden');
  pag.classList.remove('pagination-hidden');
}
