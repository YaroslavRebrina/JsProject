// MStartsev/

//  => .response || .results => itemCard

// id; //string => 'uri'
// category; //string => "section"
// title; //string =>
// abstract; //string =>
// imageUrl; //string =>
// imageAlt; //string =>
// section; //string =>
// url; //string =>

// isFavorite; //boolean => 'false' || localStorage FAVORITE*
// isRead; //boolean => 'false' || localStorage FAVORITE*
import sprite from '../../fonts/images/icons.svg';

export function card(data, containerClass) {
  const {
    id,
    category,
    title,
    abstract,
    imageUrl,
    imageAlt,
    date,
    url,
    isFavorite = false,
    isRead = false,
  } = data;

  return createCardElement(containerClass);

  function createCardElement(containerClass = 'list') {
    const alReadyReadText =
      containerClass === 'read' //прописати class ul для стор. Read
        ? 'Have read'
        : `Already read 
        <svg width="18" height="18">
          <use href="${sprite}#icon-read"></use>
        </svg>`;

    const alReadyReadFalse = isRead => (!isRead ? `card__already--false` : '');

    const alReadyRead = `<span class='card__already ${alReadyReadFalse(
      isRead
    )}'>${alReadyReadText}</span>`;

    const isFavoriteFalse = isFavorite =>
      isFavorite ? `class='favorite__text--false'` : '';

    const addToFavorite = `<button type='button' class='card__favorite'>

      <span ${isFavoriteFalse(isFavorite)}>Add to favorite
        <svg  width="16" heigth="16">
          <use href="${sprite}#icon-like-nonactive"></use>
        </svg>
      </span>

      <span ${isFavoriteFalse(!isFavorite)}>Remove from favorite
        <svg width="16" height="16" class="box__icon remove-icon">
          <use href="${sprite}#icon-like-active"></use>
        </svg>
      </span>

    </button>`;

    return `
    <li id=${id} class='${containerClass}__card card'>

      <div class='card__container'>
        <img class='card__img' src="${imageUrl}" 
          alt="${imageAlt ?? abstract}">
        <span class='card__category'>${category}</span>
        ${alReadyRead}
        ${addToFavorite}
      </div>

      <h2 class='card__title'>${title}</h2>
      <p class='card__abstract'>${abstract}</p>
      <span class='card__date'>${date}</span>
      <a class='card__read' href="${url}" target="_blank">Read more</a>

    </li>`;
  }
}
