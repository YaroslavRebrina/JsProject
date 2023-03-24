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
      containerClass === 'read'
        ? 'Have read'
        : `Already read 
        <svg width="18" height="18">
          <use href="./images/icons.svg#icon-read"></use>
        </svg>`;

    const alReadyRead = `<span class='${containerClass}__read ${
      !isRead ? `${containerClass}__read--false` : ''
    }'>${alReadyReadText}</span>`;

    const addToFavorite = `<span class='${containerClass}__favorite'> ${
      !isFavorite ? `Add to Favorite` : 'Remove from favorite'
    }</span>`;

    `<button type='button' class='card__favorite'>
      <span ${!isRead ? `class='favorite__text--false'` : ''}>Add to favorite
        <svg width="16" height="16" class="box__icon favorite-icon">
          <use href="./images/icons.svg#icon-like-nonactive"></use>
        </svg>
      </span>
      <span ${
        isRead ? `class='favorite__text--false'` : ''
      }>Remove from favorite
        <svg width="16" height="16" class="box__icon remove-icon">
          <use href="./images/icons.svg#icon-like-active"></use>
        </svg>
      </span>
    </button>`;

    return `
    <li id=${id} class='${containerClass}__card'>
      <div class='card__container'>
        <img class='card__img' src="${imageUrl}" 
          alt="${imageAlt ?? abstract}">
        <span class='card__category'>${category}</span>
        ${alReadyRead}
        <span class='card__date'>${date}</span>
        ${addToFavorite}
      </div>
      <h2 class='card__title'>${title}</h2>
      <p class='card__abstract'>${abstract}</p>
      <a class='card__read' href="${url}">Read more</a>
    </li>`;
  }
}
